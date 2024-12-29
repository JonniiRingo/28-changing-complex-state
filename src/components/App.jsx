import React, {useState} from "react";

function App() {

   const[fName, setFName] = useState("");
   const[lName, setLName] = useState("");

   function updtaeFName(event){
    setFName(event.target.value); 
   }

   function updateLName(event){
    setLName(event.target.value); 
   }




  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <form>
        <input 
            onChange = {updtaeFName}
            name ="fName" 
            type = "text"
            placeholder = "First Name" 
            value = {fName}
            />
        <input 
            onChange = {updateLName}
            name = "lName" 
            type = "text"
            placeholder = "Last Name" 
            value = {lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
