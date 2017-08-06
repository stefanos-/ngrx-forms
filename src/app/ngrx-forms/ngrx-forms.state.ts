export interface FormState {
    uuid: string;
    data: any;
    validity: FormValidity;
}

export type FormValidity = 'Valid' | 'Invalid';
