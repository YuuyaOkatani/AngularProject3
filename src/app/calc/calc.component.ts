import { Component, numberAttribute } from "@angular/core";


@Component({

    selector:'app-calc',
    templateUrl:'./calc.component.html',
    
})
export class CalcComponent{

    resultado: number = 0;
    num1: number = 0; 
    num2 : number = 0; 
    calc(operacao: string){

        switch(operacao){
            case"soma":
            this.resultado = Number(this.num1) + Number(this.num2);
            break; 
            
            case"subtracao":
            this.resultado = Number(this.num1) - Number(this.num2);   
            break;

            case"divisao":
            this.resultado = Number(this.num1) / Number(this.num2);
            break; 

            case"multiplicacao":
            this.resultado = Number(this.num1) * Number(this.num2); 
            break; 
        }


    }
    
    



}