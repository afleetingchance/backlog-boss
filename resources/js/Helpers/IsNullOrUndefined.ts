export function isNullOrUndefined (value: any): value is null | undefined {
    return typeof value === 'undefined' || value === null;
}
