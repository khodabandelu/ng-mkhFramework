export interface IGroup {
    id?: any;
    code?: string;
    name?: string;
    users?: any[];
    authorities?: any[];
}

export class Group implements IGroup {
    constructor(
        public id?: any,
        public code?: string,
        public name?: string,
        public users?: any[],
        public authorities?: any[],
    ) {
        this.id = id ? id : null;
        this.code = code ? code : null;
        this.name = name ? name : null;
        this.users = users ? users : null;
        this.authorities = authorities ? authorities : null;
    }
}
