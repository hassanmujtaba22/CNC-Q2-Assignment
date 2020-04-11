var userName = prompt("Please Enter Your Name: ");
var greeting;
        var time = new Date().getHours();
        if (time >= 20 || time <= 5) {
            greeting = "Good Night"
        } 
        else if (time >= 6 || time <= 11) {
            greeting = "Good Morning"
        } 
        else if (time >= 12 || time <= 15) {
            greeting = "Good Afternoon"
        }
        else if (time >= 16 || time <= 19) {
            greeting = "Good Evening"
        }
        else{
      }


alert("Welcome" + " " + userName + " " + "To My Website\n" + greeting);


function priceCard1(){
        alert("You Select Basic Package\nPlease Open Console to see Your Package Details.")
        console.log("Unlimited Website Pages.\nSEO Service.\nOne Week Free Hosting.\nOne Design Concept.\n100% Satisfaction Gurented.\nYour Total Price is $15.")
}

function priceCard2(){
    alert("You Select Standard Package\nPlease Open Console to see Your Package Details.")
    console.log("Unlimited Website Pages.\nSEO Service.\nOne Month Free Hosting.\nTwo Design Concept.\n100% Satisfaction Gurented.\nYour Total Price is $35.")
}

function priceCard3(){
    alert("You Select Premium Package\nPlease Open Console to see Your Package Details.")
    console.log("Unlimited Website Pages.\nSEO Service.\nOne Year Free Hosting.\nUnlimited Changing.\n100% Satisfaction Gurented.\nYour Total Price is $50.")
}