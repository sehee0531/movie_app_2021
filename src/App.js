import React from 'react';

function Food({name,fav}){
  return(
  <div>
    <h3>I Like {name}</h3>
    <img src={fav} />
  </div>
  );
}

const foodILike = [
  {
    name: "rabokki",
    image:
    "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    name:"smagiupsal",
    image:
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA4MjZfMTQz%2FMDAxNTk4NDQ5MTAwMzkz.FXCKPDduXF8WHaiPwBphfLWU1PBdsbGFbQUcMjEABsMg.JFXKgR1mI5uuHu0UJaRZr3NmtgoAIRyB2LyeisNgu5og.JPEG.rinvely0322%2F%25C3%25B5%25C8%25A3%25B0%25ED%25B1%25E2%25C1%25FD_%25BB%25EF%25B0%25E3%25BB%25EC_%252826%2529.JPG&type=sc960_832"
  }
];

function App() {
  return (
  <div>
    {foodILike.map(dish=> (
    <Food name={dish.name} fav={dish.image} /> 
    ))}
  </div>
  );
}

export default App;
