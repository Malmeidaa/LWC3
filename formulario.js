import { LightningElement } from 'lwc';

export default class Formulario extends LightningElement {

    cliente = {
        firstName:'',
        lastName:'',
        email:'',
        website:'',
        empresa:'',
        receitaanual:''

    };
       new=[];
        
    handleInputChange(event){
            var nameinput = event.target.name;
            var value = event.detail.value;

            this.cliente = {
                ...this.nameinput,[nameinput]:value

                
            };

            
    }
    onSpread(){
        

        this.new = [this.cliente];
        
    }
    
}


//template string = mistura uma string com variaveis
// 2 formas de usar com crase '``'
/*
handleOnClick(){
    this.result = `O valor receido foi ${this.nome}`;
    this,result = "valor recebido" + this.nome;
}

On spread >>> espalhamneto de info, de valores de um array para dentro de outro array ou um obj
onSpread(){
        this.new =[4,5,6, this.array];
        console.log(this.new)
    }


     handleOnClick(){
        this.result = `O valor receido foi ${this.nome}`;
}
*/