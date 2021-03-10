//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/iitdelhi-logo.png",
    place: "HydroSense Lab, IIT Delhi",
    time: "(Nov, 2020 - present)",
    desp: "<li>Predicted he recovery times of flood all over the US.</li> <li>based on a large number of hydro-meteorological and catchment characteristics specifically derived for this study.</li> <li>Deploying Statistical (Machine Learning) model to map flood recovery times across US.</li>",
  },
  {
    title: "Summer Fellowship Research Programme-2020",
    cardImage: "assets/images/experience-page/iit-delhi-g.jpg",
    place: "IIT Delhi" ,
    time: "(July - Sept, 2020)",
    desp: "<li>developed an algorithm to observe the shape components of granular particles.</li><li>Used MATLAB for digital Image Processing to obtain complete geometry of the particle boundary, angularity and other shape parameters.</li><li>Implementation in field will save lot of time as compare to raditional methods.</li>",
  },
  {
    title: "Research Intern",
    cardImage: "assets/images/experience-page/IITBHU.png",
    place: "IIT (BHU)",
    time: "(Dec, 19 - Jan, 20)",
    desp:"<li>Stress-strain curve analysis of cold-worked deformed bars – IS 456:2000.</li><li>Stress Sensitivity analysis of Steel Silo: STAAD.Pro. </li><li>Economical design study of Flanged and Rectangular Beams</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


