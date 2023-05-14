import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { LoadingFacade } from "@pet-identity/shared";
import { ButtonComponent, DropdownComponent, InputComponent, UploadComponent } from "@pet-identity/ui-kit";
import { IssuerApplication } from "../../../data-access/models/issuer-application";
import { IssuerService } from "../../../data-access/services/issuer.service";
import { WalletFacade } from "@pet-identity/feature-pet-identity";
import { Observable, Subject, of, takeUntil, tap } from "rxjs";

@Component({
    selector: 'pi-add-issuer',
    standalone: true,
    imports: [
        CommonModule,
        InputComponent,
        ReactiveFormsModule,
        ButtonComponent,
        UploadComponent,
        DropdownComponent
    ],
    templateUrl: './add-issuer.component.html',
    styleUrls: ['./add-issuer.component.scss']
})
export class IssuerApplicationComponent implements OnInit, OnDestroy {
    formGroup!: FormGroup;
    destroy$ = new Subject<void>();
    issuerTypes: {label: string, value: string}[] = [
        {label: 'Vet', value: 'vet'},
        {label: 'Contest Organizer', value: 'contestOrganizer'},
        {label: 'Breeder', value: 'breeder'},
    ];
    //TODO: lazy loading - full list of countries
    //TODO: create service which will return list of countries
    countries: {label: string, value: string}[] = [
        {label: 'Belgium', value: 'BE'},
        {label: 'China', value: 'CN'},
        {label: 'France', value: 'FR'},
        {label: 'Germany', value: 'DE'},
        {label: 'Poland', value: 'PL'},
        {label: 'Italy', value: 'IT'},
        {label: 'Netherlands', value: 'NL'},
        {label: 'United Kingdom', value: 'UK'},
        {label: 'United States', value: 'US'},
    ];
    //TODO: create interface for application
    application$: Observable<{ name: string, operator: string, metadataURI: string}> = of();
    loading = false;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly loadingFacade: LoadingFacade,
        private readonly issuerService: IssuerService,
        private readonly walletFacade: WalletFacade,
    ) {}

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }

    ngOnInit(): void {
        this.initForm();
        this.onFormTypeChange();
        //TODO: this HAVE TO be as resolver. For PoC we will use it like this
        this.walletFacade.account$.pipe(
            tap(() => this.loading = true),
            tap((account) => {
                if (account) {
                    this.issuerService.getApplicationByApplicant(account).pipe(
                        takeUntil(this.destroy$)
                        ).subscribe((application: {[key: string]: string}) => {
                            const { name, operator, metadataURI } = application;
                            this.application$ = of({ name, operator, metadataURI });
                            this.loading = false;
                        });
                }
            }
        ), takeUntil(this.destroy$)).subscribe();
    }

    //TODO: we need to create service which will handle different rules
    //fields for different types of issuers will depends on rules of each country
    //for example: in Belgium we need to have license number for vets and breeders
    //but in France we don't need it
    //Maybe we can create a service which will return a list of JSON fields for each type of issuer
    public initForm(): void {
        this.formGroup = this.formBuilder.group({
            country: [null, Validators.required],
            type: [null, Validators.required],
            requirements: this.formBuilder.group({}),
        });
    }

    private onFormTypeChange(): void {
        this.formGroup.get('type')?.valueChanges.subscribe((value: string) => {
            switch (value) {
                case 'vet':
                    this.formGroup.setControl('requirements', this.createVetFormGroup());
                    break;
                case 'contestOrganizer':
                    this.formGroup.setControl('requirements', this.createContestOrganizerFormGroup());
                    break;
                case 'breeder':
                    this.formGroup.setControl('requirements', this.createBreederFormGroup());
                    break;
                default:
                    this.formGroup.setControl('requirements', this.formBuilder.group({}));
                    break;
            }
        })
    }

    public get type(): string | null {
        return this.formGroup.get('type')?.value;
    }

    private createVetFormGroup() {
        return this.formBuilder.group({
            name: [null, Validators.required],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, Validators.required],
            licenseNumber: [null, Validators.required],
        });
    }

    private createContestOrganizerFormGroup() {
        return this.formBuilder.group({
            name: [null, Validators.required],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            email: [null, Validators.required],
            website: [null],
        });
    }

    private createBreederFormGroup() {
        return this.formBuilder.group({
            name: [null, Validators.required],
            email: [null, Validators.required],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            website: [null],
        });
    }

    public clear(): void {
        this.formGroup.reset();
    }

    public submit(): void {
        const issuer: IssuerApplication = this.formGroup.getRawValue();
        this.loadingFacade.setLoading(true);
        this.issuerService.postIssuerApplication(issuer).subscribe(() => {
            this.formGroup.reset();
            this.loadingFacade.setLoading(false);
        },
        () => {
            this.loadingFacade.setLoading(false);
        }
        );
    }
}