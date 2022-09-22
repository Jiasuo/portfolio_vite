<script setup>
import HomeSectionHeading from './HomeSectionHeading.vue';

</script>

<template>
  <section class="portfolio" id="portfolio">
    <!-- Heading -->
    <HomeSectionHeading text="Réalisations" number="2" />
    <!-- Content -->
    <div class="content">
      <!-- Project 1 -->
      <div class="project">
        <!-- Content -->
        <div class="projectcontent">
          <p class="projectoverline">Site internet</p>
          <h3 class="projecttitle">
            <a href="javascript:;">Restaurant Pierre Orsi</a>
          </h3>
          <div class="projectdesc">
            <p>
              Ce meilleur ouvrier de France avait besoin, pour son restaurant gastronomique à fort renommée, d'une
              refonte de l'identité visuelle et création de la landing page.
            </p>
          </div>
          <div class="projectlabels">
            <span class="projectlabel">Photoshop</span><span class="projectlabel">XD</span><span
              class="projectlabel">HTML/CSS</span><span class="projectlabel">JavaScript</span>
          </div>
          <div class="projectlinks">
            <a href="javascript:;"><img src="../assets/img/github-i20.svg" alt="link" /></a>
            <a href="javascript:;"><img src="../assets/img/external-i20.svg" alt="link" /></a>
          </div>
        </div>
        <!-- Image -->
        <div class="projectimage">
          <a href="javascript:;" class="projectlink">
            <div class="imagecontainer">
              <img src="../assets/img/site-pierreorsi.png" alt="Aperçu projet Pierre Orsi" />
            </div>
          </a>
        </div>
      </div>
      <!-- Project 2 -->
      <div class="project">
        <!-- Content -->
        <div class="projectcontent">
          <p class="projectoverline">Site internet</p>
          <h3 class="projecttitle">
            <a href="javascript:;">Label de musique Fred & Mahmoud</a>
          </h3>
          <div class="projectdesc">
            <p>
              Le label indépendant Fred & Mahmoud avait besoin, pour leur premier site internet, d'une identité visuelle
              et d'un accompagnement technique.
            </p>
          </div>
          <div class="projectlabels">
            <span class="projectlabel">Illustrator</span><span class="projectlabel">After Effects</span><span
              class="projectlabel">XD</span><span class="projectlabel">HTML/CSS</span><span
              class="projectlabel">JavaScript</span>
          </div>
          <div class="projectlinks">
            <a href="javascript:;"><img src="../assets/img/github-i20.svg" alt="link" /></a>
            <a href="javascript:;"><img src="../assets/img/external-i20.svg" alt="link" /></a>
          </div>
        </div>
        <!-- Image -->
        <div class="projectimage">
          <a href="javascript:;" class="projectlink">
            <div class="imagecontainer">
              <img src="../assets/img/site-labelfm.png" alt="Aperçu projet Pierre Orsi" />
            </div>
          </a>
        </div>
      </div>
      <!-- Project 3 -->
      <div class="project">
        <!-- Content -->
        <div class="projectcontent">
          <p class="projectoverline">Site internet</p>
          <h3 class="projecttitle">
            <a href="javascript:;">Agence Web Slika</a>
          </h3>
          <div class="projectdesc">
            <p>
              Les créateurs de cette nouvelle agence de web design souhaitaient affirmer la qualité de leurs créations,
              leur fiabilité mais aussi leur aspect innovant pour leur site internet.
            </p>
          </div>
          <div class="projectlabels">
            <span class="projectlabel">Illustrator</span><span class="projectlabel">XD</span><span
              class="projectlabel">HTML/CSS</span><span class="projectlabel">JavaScript</span>
          </div>
          <div class="projectlinks">
            <a href="javascript:;"><img src="../assets/img/github-i20.svg" alt="link" /></a>
            <a href="javascript:;"><img src="../assets/img/external-i20.svg" alt="link" /></a>
          </div>
        </div>
        <!-- Image -->
        <div class="projectimage">
          <a href="javascript:;" class="projectlink">
            <div class="imagecontainer">
              <img src="../assets/img/site-slika.png" alt="Aperçu projet Pierre Orsi" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Container */
section.portfolio {
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;
}

/* Heading number */
section.portfolio>div.heading::before {
  content: "02. ";
}

/* Content */
/* Content items */
section.portfolio>.content>.project {
  position: relative;
  display: -ms-grid;
  display: grid;
  gap: 10px;
  -ms-grid-columns: 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr;
  grid-template-columns: repeat(12, 1fr);
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/* Content items common not last */
section.portfolio>.content>.project:not(:last-child) {
  margin-bottom: 100px;
}

/* Project contents */
section.portfolio .projectcontent {
  position: relative;
  -ms-grid-column: 1;
  -ms-grid-column-span: 6;
  grid-area: 1 / 1 / -1 / 7;
}

/* Projects odds content */
section.portfolio>.content>.project:nth-child(2n + 1) .projectcontent {
  grid-column: 7 / -1;
  text-align: right;
}

/* Projects contents overlines */
section.portfolio .projectcontent .projectoverline {
  margin: 10px 0px;
  color: #64ffda;
  font-family: "SF Mono", arial, sans-serif;
  font-size: 13px;
}

/* Projects contents titles */
section.portfolio .projectcontent .projecttitle {
  margin: 0 0 10px;
  position: relative;
  z-index: 2;
}

section.portfolio .projectcontent .projecttitle a {
  color: #ccd6f6;
  font-size: clamp(24px, 5vw, 28px);
  font-family: "Calibre SemiBold", arial, sans-serif;
}

/* Projects contents description */
section.portfolio .projectcontent .projectdesc {
  -webkit-box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: 4px;
  background-color: #112240;
}

/* Projects contents description text */
section.portfolio .projectcontent .projectdesc {
  font-family: "Calibre Regular", arial, sans-serif;
  color: #8892b0;
  font-size: 18px;
  line-height: 1.3;
}

/* Project content labels area */
section.portfolio .projectcontent .projectlabels {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
}

/* Project content label */
section.portfolio .projectcontent .projectlabels .projectlabel {
  font-family: "SF Mono", arial, sans-serif;
  font-size: 13px;
  color: #a8b2d1;
}

/* Project content links*/
section.portfolio .projectcontent .projectlinks {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  margin-top: 10px;
  margin-left: -10px;
  color: #ccd6f6;
}

/* Project content links a */
section.portfolio .projectlinks a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px;
  position: relative;
  z-index: 1;
}

/* Project content links a img */
section.portfolio .projectlinks a img {
  width: 20px;
  height: 20px;
}

/* Project content links odds */
section.portfolio .project:nth-child(2n + 1) .projectlinks {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  margin-left: 0px;
  margin-right: -10px;
}

/* Project content labels odds */
section.portfolio .project:nth-child(2n + 1) .projectlabels {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

section.portfolio .project:nth-child(2n + 1) .projectlabels .projectlabel {
  margin: 0px 0px 5px 20px;
}

/* Project content labels even */
section.portfolio .project:nth-child(2n) .projectlabels {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

section.portfolio .project:nth-child(2n) .projectlabels .projectlabel {
  margin: 0px 20px 5px 0;
}

/* Projects images area*/
section.portfolio .projectimage {
  -webkit-box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 1;
}

/* Projects image area link */
section.portfolio .projectimage a {
  width: 100%;
  height: 100%;
  background-color: #64ffda;
  border-radius: 4px;
  vertical-align: middle;
  position: relative;
  z-index: 1;
}

section.portfolio .projectimage a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0px;
  z-index: 3;
  background-color: #0a192f;
  mix-blend-mode: screen;
}

/* Projects image area image container */
section.portfolio .projectimage a .imagecontainer {
  max-width: 700px;
}

/* Projects image file */
section.portfolio .projectimage img {
  max-width: 100%;
  border-radius: 4px;
}

/* Projects odds image area*/
section.portfolio>.content>.project:nth-child(2n + 1) .projectimage {
  -ms-grid-column: 1;
  -ms-grid-column-span: 7;
  grid-column: 1 / 8;
}

@media screen and (max-width: 1079px) {

  /* Portfolio projects grid reorganization */
  section.portfolio>.content>.project:nth-child(2n + 1) .projectcontent {
    grid-column: 5 / -1;
  }

  section.portfolio .projectcontent {
    -ms-grid-column: 1;
    -ms-grid-column-span: 8;
    grid-column: 1 / 9;
  }
}

@media screen and (max-width: 768px) {
  section.portfolio {
    padding: 80px 0;
  }

  /* Portfolio */
  section.portfolio>.content>.project {
    margin-bottom: 70px;
  }

  /* Portfolio project content to fit grid */
  section.portfolio>.content>.project>div.projectcontent,
  section.portfolio>.content>.project>div.projectimage,
  section.portfolio>.content>.project:nth-child(2n+1)>div.projectcontent,
  section.portfolio>.content>.project:nth-child(2n+1)>div.projectimage {
    grid-column: 1 / -1;
  }

  section.portfolio>.content>.project>div.projectcontent {
    height: 100%;
  }

  section.portfolio>.content>.project>div.projectcontent,
  section.portfolio>.content>.project:nth-child(2n+1) div.projectcontent {
    padding: 40px 40px 30px;
    text-align: left;
  }

  section.portfolio .project:nth-child(2n + 1) .projectlabels {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
  }

  section.portfolio .projectimage {
    height: 100%;
  }

  section.portfolio .projectimage a {
    display: block;
    height: 100%;
  }

  section.portfolio .projectimage a .imagecontainer {
    height: 100%;
  }

  section.portfolio .projectimage img {
    -o-object-fit: cover;
    object-fit: cover;
    width: auto;
    height: 100%;
    -webkit-filter: grayscale(100%) contrast(1) brightness(50%);
    filter: grayscale(100%) contrast(1) brightness(50%);
    opacity: 0.9;
  }

  section.portfolio .projectcontent {
    background-color: rgba(17, 34, 64, 0.85);
    position: relative;
    z-index: 2;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  section.portfolio .projectcontent .projectdesc {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 20px 0;
  }

  section.portfolio .projectcontent .projectlabels {
    margin: 10px 0px;
  }

  section.portfolio .project:nth-child(2n + 1) .projectlabels .projectlabel {
    margin: 0 20px 5px 0;
  }

  section.portfolio .project:nth-child(2n + 1) .projectlinks {
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: start;
  }
}
@media screen and (max-width: 480px) {
  section.portfolio > .content > .project > div.projectcontent, section.portfolio > .content > .project:nth-child(2n+1) div.projectcontent{
        padding: 25px 25px 20px;
    }
}
</style>