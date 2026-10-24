function prof(){let contactCard={
        name:"Sachin" ,
        relationship: "dad",
        activity:"badminton",
        city:"gurugram"
      };
      document.getElementById("name").innerHTML=contactCard.name;
      document.getElementById("relationship").innerHTML=contactCard.relationship;
      document.getElementById("activity").innerHTML=contactCard["activity"];
      document.getElementById("city").innerHTML=contactCard["city"];
    }