export interface FormState {
    model: any;
    validity: FormValidity;
}

export type FormValidity = 'Valid' | 'Invalid';
