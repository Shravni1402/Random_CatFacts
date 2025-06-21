async function getCatFact() 
{
  const factElement = document.getElementById("cat-fact");
  factElement.textContent = "Loading...";

  
  try{
    const response = await fetch("https://meowfacts.herokuapp.com");
    const apiData = await response.json();
    factElement.textContent = apiData.data;
  }
   catch (error)
    {
    factElement.textContent = "Failed to fetch a cat fact.";
    console.error("Error:", error);
  }
}