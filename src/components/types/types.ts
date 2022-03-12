export type FormErrorsState = {
    name?: string;
    surname?: string;
    email?: string;
    phone?: string;
    gender?: string;
    dob?: string;
    comment?: string;
};

export type IsTouchedState = {
    name: boolean;
    surname: boolean;
    email: boolean;
    phone: boolean;
    gender: boolean;
    day: boolean;
    month: boolean;
    year: boolean;
    comment: boolean;
};

export type UserType = {
    name: string;
    surname: string;
    email: string;
    phone: string;
    gender: string;
    dob: string;
    comment: string;
};

export type PositionTypes = {
    gridColumn: string;
    gridRow: string;
};
