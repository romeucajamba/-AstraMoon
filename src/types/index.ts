interface Name {
    title: string;
    first: string;
    last: string;
}

interface Location {
    street: {
        number: number;
        name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
        latitude: string;
        longitude: string;
    };
}
interface Login {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
}

interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

interface Dob {
    date: string; // ISO 8601 format
    age: number;
}

interface Registered {
    date: string; // ISO 8601 format
    age: number;
}

export interface Result {
    gender: string;
    name: Name;
    dob: Dob;
    email: string;
    phone: string;
    cell: string;
    location: Location;
    nat: string;
    login: Login;
    picture: Picture;
    registered: Registered;
}

interface Info {
    seed: string;
    results: number;
    page: number;
    version: string;
}

export interface ApiResponse {
    results: Result[];
    info: Info;
}