var numSort =[]
var numDig = []
 function sorteioNum(){

   if(numDig.length < 6){
      alert("Antes de Sortear digite 6 numeros nos campos")
   }else{
      numSort = []
      do {
 
         let sort =Math.ceil(Math.random()*60)
         if(!numSort.includes(sort)){
          numSort.push(sort)
         }
 
      } while (numSort.length < 6);
 
      document.getElementById("numsort").innerHTML = numSort
      vereficaAcertos()
   }
   
    
 }

 function getNum(valor,pos){
    valor = Number (valor)
     if (valor>60){
        alert("O valor é maior que 60")
        limpar(pos)
     }else if (valor<=0){
        alert("O valor não pode ser menor que 0")
        limpar(pos)
     }else if(numDig.includes(valor)){
        alert("Este valor já foi digitado")
        limpar(pos)
     }else{
        numDig[pos] = valor
     }
 }
  
 function limpar (pos){
     document.getElementById(`num${pos}`).value = ""
 }

  function vereficaAcertos(){
     let cont = 0
     numDig.forEach(function(valor,index){
        if(numSort.includes(valor)){
             cont = cont+1
        }    
     })
     document.getElementById("total").innerText = cont
  }