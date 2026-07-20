const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

// loop starts here
const persons = () => {
    for(const ind of people){
         if(ind === "Phil" || ind == "Lola"){
          refused.textContent += (`${ind},`);
         }else{
          admitted.textContent += (`${ind}, `);
         } 
    }
};


persons();
// refused.textContent += ...;
// admitted.textContent += ...;