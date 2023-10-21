export interface IUser {
    id: number,
    name: string;
    email: string;
    birthdate: Date,
    isAdmin: boolean
};

export const USERS: IUser[] = [
    {
        id: 1000,
        name: 'John Smith',
        birthdate: new Date(),
        email: 'example@ukr.net',
        isAdmin: true 
    },
    {
        id: 1020,
        name: 'Bob Super',
        birthdate: new Date(),
        email: 'grand@gmail.com',
        isAdmin: false 
    },
    {
        id: 1099,
        name: 'Vova Lift',
        birthdate: new Date(),
        email: 'rerett@ukr.net',
        isAdmin: true 
    }
]