(() => {
    console.log('!');

    const buttons = document.querySelectorAll(".button");
    const myImages = document.querySelector("#Images");
    const tButtons = document.querySelectorAll(".true-link");
    const textInfo = document.querySelector(".thingsP");
    const stuButton = document.querySelectorAll(".tryB");

    function carousel(){

		let offset = 800,
			multiplier = this.dataset.offset; 
            myImages.style.right = `${offset * multiplier + "px"}`;
    }
//debugger;


function getUserData(){
    //event.preventDefault();
    //I only got the link;(
 
    let url = `/${this.getAttribute('href')}`;
    console.log(data);

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        tryData(data);
    })
    
   
};

    function tryData(things){
        let whatAmIdo = `<p>${things.info}</p><p><br>Can I ask why I got wrong here?</p>`;
       textInfo.innerHTML = whatAmIdo;

       debugger;

    };


    buttons.forEach(button =>button.addEventListener("click",carousel));

    tButtons.forEach(button => button.addEventListener("click" , getUserData ));

    stuButton.forEach(button =>button.addEventListener("click",tryData));
})();