import { Component } from "@angular/core";


@Component({

    selector:'app-calc',
    templateUrl:'./calc.component.html',
    
})
export class CalcComponent{

    soma(a: number, b:number):number {
        return a + b ; 
    }
    



}