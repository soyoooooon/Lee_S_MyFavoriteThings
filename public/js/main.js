(() => {
    console.log('!');

    const buttons = document.querySelectorAll(".button");
    const myImages = document.querySelector("#Images");
    const tButtons = document.querySelectorAll(".true-link");
    const textInfo = document.querySelector(".thingsP");
    // const stuButton = document.querySelectorAll(".tryB");

    function carousel(){

		let offset = 800,
			multiplier = this.dataset.offset; 
            myImages.style.right = `${offset * multiplier + "px"}`;
    }
//debugger;


function getUserData(data){
    event.preventDefault();
  
 
    let url = `/${this.getAttribute('href')}`;
    
    console.log(data);
    //I got Data is not defined here...

    fetch(url)
     .then(res => res.json())
     .then(data => {
        
        tryData(data);


    })
    .catch((err) => console.log(err));
   
};

    function tryData(stuff){
        let whatIdo = `<p>${stuff.proID}</p>
                        <P><br>${stuff.this}</p>
                        <p><br>${stuff.info}</p>
                        <p><br>Cost: ${stuff.cost}</p>
                        <p><br>${stuff.happiness}</p>`;
            textInfo.innerHTML = whatIdo;
           
       

    };


    buttons.forEach(button =>button.addEventListener("click",carousel));

    tButtons.forEach(button => button.addEventListener("click" , getUserData ));

    // stuButton.forEach(button =>button.addEventListener("click",tryData));
})();