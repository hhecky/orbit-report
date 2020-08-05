import { LowerCasePipe } from '@angular/common';
import { stringify } from 'querystring';

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.orbitType = orbitType;
        this.type = type;
        this.operational = operational;
        this.launchDate = launchDate;
    }

    shouldShowWarning() {
        this.type = this.type.toLowerCase();
        return this.type === "space debris";

    }   

}
