import React, { useEffect } from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import img1 from "../../img/5_1024x1024_8ce77031-a8ee-4f22-a420-5ec8c01a8f21_768x.jpg";
import img2 from "../../img/3_78994f8e-a61d-4c0e-bcac-ae4c2a90f4e7_768x.jpg";
import ScrollAnimation from "react-animate-on-scroll";
const About = () => {
  useEffect(() => {
    document.title = "Chair Shop | About";
  }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className="container">
        <div className="container my-5">
          <ScrollAnimation animateIn="fadeIn">
            <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 align-items-stretch">
              <div className="col">
                <img className="img-fluid" src={img1} alt="park" />
              </div>
              <div className="col">
                <h1
                  className="text-center fw-bold"
                  style={{ color: "#ef703d" }}
                >
                  Chair House
                </h1>
                <p style={{ textAlign: "justify", lineHeight: "inherit" }}>
                  The chair has been used since antiquity, although for many
                  centuries it was a symbolic article of state and dignity
                  rather than an article for ordinary use. "The chair" is still
                  used as the emblem of authority in the House of Commons in the
                  United Kingdom[8] and Canada,[9] and in many other settings.
                  In keeping with this historical connotation of the "chair" as
                  the symbol of authority, committees, boards of directors, and
                  academic departments all have a 'chairman' or 'chair'.[10]
                  Endowed professorships are referred to as chairs.[11] It was
                  not until the 16th century that chairs became common.[12]
                  Until then, people sat on chests, benches, and stools, which
                  were the ordinary seats of everyday life. The number of chairs
                  which have survived from an earlier date is exceedingly
                  limited; most examples are of ecclesiastical, seigneurial or
                  feudal origin.
                </p>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 align-items-stretch mt-4">
              <div className="col">
                <h1
                  className="text-center fw-bold"
                  style={{ color: "#ef703d" }}
                >
                  About with me
                </h1>
                <p style={{ textAlign: "justify", lineHeight: "inherit" }}>
                  Chairs can be made from wood, metal, or other strong
                  materials, like stone or acrylic. In some cases, multiple
                  materials are used to construct a chair; for example, the legs
                  and frame may be made from metal and the seat and back may be
                  made from plastic. Chairs may have hard surfaces of wood,
                  metal, plastic, or other materials, or some or all of these
                  hard surfaces may be covered with upholstery or padding. The
                  design may be made of porous materials, or be drilled with
                  holes for decoration; a low back or gaps can provide
                  ventilation. The back may extend above the height of the
                  occupant's head, which can optionally contain a headrest.
                  Chairs can also be made from more creative materials, such as
                  recycled materials like cutlery and wooden play bricks,
                  pencils, plumbing tubes, rope, corrugated cardboard, and PVC
                  pipe.
                </p>
              </div>
              <div className="col">
                <img className="img-fluid" src={img2} alt="park" />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default About;
