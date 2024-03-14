import { Component, numberAttribute } from "@angular/core";


@Component({

    selector:'app-calc',
    templateUrl:'./calc.component.html',
    
})
export class CalcComponent{

<<<<<<< HEAD
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


=======
    soma(a: number, b:number):number {
        return a + b ; 
>>>>>>> e9fdd7b1b52f94197f4bbdd91535a07c93e84450
    }
    
    



}