

const AboutPage = () => {
  return (
    <div className="about-container">

      <div className="about-intro">

        <div className="container col-xxl-8 w-100">

          <div className="row flex-lg-row align-items-center g-5 py-5">

            <div className="col-10 col-sm-8 col-lg-6">

              <img src="https://i.postimg.cc/m2pGfpqz/BrANDON.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />

            </div>

            <div className="col-lg-6 py-2">

              <h1 className="display-5 fw-bold lh-1 mb-3 text-white border-bottom">About me</h1>

              <p className="lead text-white text-start" style={{maxHeight: "330px", overflow: "scroll"}}>I'm Brandon Roulstone, a 20-year-old individual propelled by an unwavering dedication to excellence and an unquenchable thirst for pushing boundaries. Since youth, I've cultivated an exceptional work ethic that fuels my journey in academia and beyond.My pursuit of excellence defines every facet of my life. Be it academics, sports, or delving into the captivating world of coding, I relentlessly strive to surpass expectations. Once I set my sights on a goal, my determination propels me to achieve outstanding results. This unyielding commitment has consistently set me apart, enabling me to deliver nothing short of my best.Beyond my dedication to excellence, I'm fueled by an undying passion for sports. From a tender age, I immersed myself in various sports, sculpting not just my physical prowess but also nurturing invaluable life skills like discipline, teamwork, and unwavering perseverance.Simultaneously, my fascination with coding emerged as a parallel passion. Engaging with coding isn't just about writing lines of code; it's a journey where logic intertwines with creativity, enabling me to tackle complex challenges methodically.The fusion of my athletic endeavors and coding pursuits has been instrumental in honing my ability to think critically and strategically. Whether on the field or behind a screen, the same determination and resilience propel me forward, seeking optimal solutions and pushing boundaries.This dual pursuit isn't merely about mastering two different domains; it's a testament to my adaptability, agility, and unrelenting thirst for growth in diverse arenas.</p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start">

                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Resume</button>

              </div>


            </div>


          </div>

        </div>

      </div>

    </div>
  )
}

export default AboutPage;
