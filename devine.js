function accueil(){
    let name=document.getElementById("nom")
    let nom=prompt("Entrez votre nom");
    while(nom==""){
        nom=prompt("Veuillez renseigner ce champ")
    }
    name.innerHTML=nom.toUpperCase();
    name.style.color="yellow";
}
let secret=Math.floor(1+(100-1)*Math.random())




function comparer(x){return x==secret }

function game(){
    let gagner=document.getElementById("score");
    let nbre=document.getElementById("nbre");
    let essaie=document.getElementById("essais");
    let score=document.getElementById("again");
    let btn=document.getElementById("btn");
    let play=document.getElementById("play");
    if(nbre.value==""){gagner.innerHTML="Veuillez entrer un nombre";}
    else{
        if(parseInt(essaie.textContent)==1 && comparer(parseInt(nbre.value))==false){
            essaie.innerHTML=parseInt(essaie.textContent)-1;
            score.innerHTML=parseInt(score.textContent)+1
            gagner.innerHTML="Vous perdus, Vous n'avez plus d'essais😢😫 Le nombre etait "+secret;
            gagner.style.color="#dd3848";
            nbre.disabled=true;
            btn.disabled=true;
            play.style.visibility="visible"
        }else{
            if(comparer(parseInt(nbre.value))){
                essaie.innerHTML=parseInt(essaie.textContent)-1;
                score.innerHTML=parseInt(score.textContent)+1
                gagner.innerHTML="Vous avez gagne apres "+score.textContent+" essais🎉✌ ";
                gagner.style.color="green";
                btn.disabled=true;
                nbre.disabled=true;
                play.style.visibility="visible"
            }else{
                essaie.innerHTML=parseInt(essaie.textContent)-1;
                score.innerHTML=parseInt(score.textContent)+1
                if(parseInt(nbre.value)>secret){
                    gagner.innerHTML="Trop grand, essayez encore";
                    gagner.style.color="red";
                    
                }
                else{
                    gagner.innerHTML="Trop petit, essayez encore";
                    gagner.style.color="red";
                }
            }
        }
    }
    
}

document.addEventListener('keydown',function(event){
    if(event.keyCode==13){
        event.preventDefault();
        game();
    }
})

function rejouer(){
    let gagner=document.getElementById("score");
    let nbre=document.getElementById("nbre");
    let essaie=document.getElementById("essais");
    let score=document.getElementById("again");
    let btn=document.getElementById("btn");
    let play=document.getElementById("play");

    window.location.reload();
    play.style.visibility="hidden";

}

