
import * as formsData from './deepChange';

export const rxFormData = {

    set: (data: any, path: string[], value: string) => {
        return formsData.deepChange(null, data, path, (clonedData, finalPath) => {
           clonedData[finalPath] = value;
           return clonedData;
        });
    },

    push: (data: any, path: string[], value: string) => {
        // Do something
    },

    reset: (data: any, path: string[]) => {
        // Do something
    }
};

