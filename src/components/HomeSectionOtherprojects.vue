<script setup>
  
</script>

<template>
  <section class="otherprojects" id="other">
        <div class="title">
          <h2>Autres Projets Notables</h2>
          <p>liste des projets</p>
        </div>
        <div class="projectlist">
          <!-- Project 1 -->
          <div class="project">
            <div class="projecttop">
              <div class="projecticon">
                <img src="../assets/img/folder-i40.svg" alt="Project icon" />
              </div>
              <div class="projectlinks">
                <a href="javascript:;"
                  ><img src="../assets/img/github-i20.svg" alt="link"
                /></a>
                <a href="javascript:;"
                  ><img src="../assets/img/external-i20.svg" alt="link"
                /></a>
              </div>
            </div>
            <h3 class="projecttitle">Questionnaire médical numérique</h3>
            <p class="projectdescription">
              Le cabinet de chirurgie dentaire avait besoin d'un outil numérique pour remplir les questionnaires médicaux afin de mieux respecter les gestes barrières.
            </p>
            <div class="projectlabels">
              <span class="projectlabel">Vue.js</span
              ><span class="projectlabel">Flutter</span
              ><span class="projectlabel">Node.js</span>
            </div>
          </div>
          <!-- Project 2 -->
          <div class="project">
            <div class="projecttop">
              <div class="projecticon">
                <img src="../assets/img/folder-i40.svg" alt="Project icon" />
              </div>
              <div class="projectlinks">
                <a href="javascript:;"
                  ><img src="../assets/img/github-i20.svg" alt="link"
                /></a>
                <a href="javascript:;"
                  ><img src="../assets/img/external-i20.svg" alt="link"
                /></a>
              </div>
            </div>
            <h3 class="projecttitle">Pilotage de logiciel par commande vocale</h3>
            <p class="projectdescription">
              Le cabinet de chirurgie dentaire avait besoin d'un outil de reconnaissance vocal pour gagner en productivité au fauteuil.
            </p>
            <div class="projectlabels">
              <span class="projectlabel">Python</span
              ><span class="projectlabel">Linux</span>
            </div>
          </div>
          <!-- Project 3 -->
          <div class="project">
            <div class="projecttop">
              <div class="projecticon">
                <img src="../assets/img/folder-i40.svg" alt="Project icon" />
              </div>
              <div class="projectlinks">
                <a href="javascript:;"
                  ><img src="../assets/img/github-i20.svg" alt="link"
                /></a>
                <a href="javascript:;"
                  ><img src="../assets/img/external-i20.svg" alt="link"
                /></a>
              </div>
            </div>
            <h3 class="projecttitle">Générateur d'attestation de déplacement</h3>
            <p class="projectdescription">
              Une attestation de déplacement dérogatoire générée en un clic pour obtenir un QR code valide en cas de contrôle.
            </p>
            <div class="projectlabels">
              <span class="projectlabel">Django</span
              ><span class="projectlabel">HTML/CSS</span
              ><span class="projectlabel">Javascript</span>
            </div>
          </div>
        </div>
      </section>
</template>

<style scoped>
  /* #region |||OTHER||| */
/* Container */
section.otherprojects {
  margin: 0px auto;
  padding: 100px 0px;
  max-width: 1000px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
/* Title */
section.otherprojects .title h2 {
  font-family: "Calibre SemiBold", arial, sans-serif;
  font-size: 32px;
  color: #ccd6f6;
  margin-bottom: 10px;
}
/* Subtitle */
section.otherprojects .title p {
  font-family: "SF Mono", arial, sans-serif;
  font-size: 13px;
  color: #64ffda;
  text-align: center;
}
/* Project list container */
section.otherprojects .projectlist {
  padding: 0px;
  margin: 50px 0px 0px;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: minmax(300px, 1fr) 15px minmax(300px, 1fr) 15px minmax(300px, 1fr);
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 15px;
  position: relative;
}
/* Project container */
section.otherprojects .projectlist .project {
  -webkit-box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
          box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  position: relative;
  height: 100%;
  padding: 2rem 1.75rem;
  border-radius: 4px;
  background-color: #112240;
}
/* PROJECT TOP */
section.otherprojects .projectlist .project .projecttop {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 35px;
}
/* Project icon */
section.otherprojects .projecttop .projecticon {
  height: 100%;
  width: 40px;
}
/* Project links container */
section.otherprojects .projecttop .projectlinks {
  margin-right: -10px;
}
/* Project link */
section.otherprojects .projecttop .projectlinks a {
  padding: 5px 7px;
}
section.otherprojects .projecttop .projectlinks a img {
  width: 20px;
  height: 20px;
}
/* PROJECT TITLE */
section.otherprojects .projecttitle {
  margin-bottom: 10px;
  color: #ccd6f6;
  font-family: "Calibre SemiBold";
  font-size: 22px;
}
/* PROJECT DESCRIPTION */
section.otherprojects .projectdescription {
  font-family: "Calibre Regular", arial, sans-serif;
  font-weight: 400;
  font-size: 17px;
  color: #8892b0;
  line-height: 1.3;
  margin-bottom: 20px;
}
/* PROJECT LABELS */
/* Container */
section.otherprojects .project .projectlabels {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
      -ms-flex-align: end;
          align-items: flex-end;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
      flex-grow: 1;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  padding: 0px;
  margin-top: 20px;
}
/* Labels */
section.otherprojects .project .projectlabels .projectlabel {
  color: #8892b0;
  font-family: "SF Mono", arial, sans-serif;
  font-size: 12px;
}
/* Labels margin */
section.otherprojects .project .projectlabels .projectlabel:not(:last-of-type) {
  margin-right: 15px;
}
/* #endregion */
@media screen and (max-width: 1079px) {
  /* Other projects grid */
  section.otherprojects .projectlist {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
}
@media screen and (max-width: 768px) {
  section.otherprojects{
      padding: 80px 0;
  }
}

</style>