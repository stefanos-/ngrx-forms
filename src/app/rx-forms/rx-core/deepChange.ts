export function deepChange(clonedData: any, data: any, path: string[], change): any {

    const currentPath = path[0];

    if (path.length < 1) {
        return data;
    }

    if (!clonedData) {
        clonedData = { ...data };
    }

    if (path.length === 1) {
        return change(clonedData, currentPath);
    }

    if (data) {
        data = data[currentPath];
    }

    clonedData[currentPath] = deepChange(clonedData[currentPath], data, path.slice(1), change);

    return clonedData;
}
