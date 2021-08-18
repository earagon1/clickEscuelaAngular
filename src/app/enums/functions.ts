export const FUNCTION = {
    SORT:
    {
        BY_NAME: (a, b) => {
        if (a.nombre > b.nombre) { return 1; }
        if (a.nombre < b.nombre) { return -1; }
        return 0; }
    }
};