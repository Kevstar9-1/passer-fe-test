export interface Country {
    name: string;
    isoAlpha2Code: string;
    isoAlpha3Code: string;
    isoNumericCode: string | number;
    region: string;
    subRegion: string;
    itu: string;
    dial: string | number;
    esOfficialName: string;
    enOfficialName: string;
    sugefCode: string | number;
    riskScore: string | number;
};

export interface TypeId {
    code: string | number;
    name: string;
    sugefCode: string | number;
};

export interface Ocupation {
    code: string;
    createdAt: string;
    name: string;
    riskScore: string;
    sugefCode: string;
    updatedAt: string;
    _id: string;
};

export interface MenuButton {
    icon: string;
    name: string;
};