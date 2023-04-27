import { LightningElement } from 'lwc';

export default class Exer1lwc3 extends LightningElement {
    
    nome;
    peso;
    altura;
    imc;

    handleOnChangeNome(event){
        this.nome = event.detail.value;   
    }
    handleOnChangePeso(event){ 
        this.peso = event.detail.value;
    }
   
    handleOnChangeAltura(event){ 
        this.altura = event.detail.value/100;
        
    }
       
    handleOnClick(){
        
        this.imc = this.peso/(this.altura*this.altura);
        this.imc = this.imc.toFixed(2);
        
        

    }
}