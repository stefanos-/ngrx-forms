export interface FormState {
    data: any;
    validity: FormValidity;
}

export type FormValidity = 'Valid' | 'Invalid';
