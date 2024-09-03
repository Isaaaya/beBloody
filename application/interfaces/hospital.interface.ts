export interface IHospital {
    name: string,
    address: string,
    coordinates: {latitude: number, longitude:  number},
    images: string[],
    phone: number
};