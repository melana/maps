import { Injectable, Input } from '@angular/core';
import { Object } from './shared/interfaces';

@Injectable()
export class Obj {

    @Input()
    obj!: Object
    id!: number;
    latitude!: number;
    longitude!: number;
    name!: string;
    selectedItem!: false;

    constructor() { }
}