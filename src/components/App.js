import React ,{ useEffect,useState } from "react";




// create your App component here
function App(){

const[dogImage,setDogImage]=useState(null)
const [isLoaded, setIsLoaded] = useState(false);


useEffect(()=>{
fetch("https://dog.ceo/api/breeds/image/random")
.then(res=>res.json())
.then(data=> 
    { setDogImage(data.message);
setIsLoaded(true);}
)
},[]);
if (!isLoaded) return <p>Loading...</p>;
return(
<div>
{/* <p>Loading....</p> */}
<img src={dogImage} alt="A Random Dog" />
</div>
);


// return ;

}
export default App;