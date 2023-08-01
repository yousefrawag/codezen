import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./ProjectsCard.scss";
import { useLocation } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import { useGlobalContext } from "../../../context/context";

const ProjectsCard = (props) => {
  const {myData} = useGlobalContext()
  const { grid } = props;
  const location = useLocation();

  return (
    <>

    {myData.map((item) => {
        return (
          //   <div key={items.id}
          //   className={`${
          //     location.pathname === "/our-work"
          //       ? `col-${grid} col-${grid}-grider`
          //       : "col-3"
          //   }`}
          // >
          
          //     <div className="project-card">
          //       <div className="project-img">
          //         <img
          //           className="img-fluid"
          //           src={items.bage.imgUrl} alt={items.bage.title}
          //         />
          //       </div>
          //       <div className="project-info">
          //         <span className="project-name"> project name {/* {items.bage.name} */} </span>
          //         <h4 className="project-title">
          //         {items.bage.title}
          //         </h4>
          //         <div className="project-starts">
          //           <ReactStars
          //             count={5}
          //             size={18}
          //             value={5}
          //             edit={false}
          //             activeColor="#ffd700"
          //           />
          //         </div>
          //         <p
          //           className={`pro-description ${
          //             grid === 12 ? "d-block" : "d-none"
          //           }`}
          //         >
          //           {items.bage.description}
          //         </p>
          //         <button className="review-project">
          //                       <Link to={`/SingleProduct/${items.id}`}>See more <HiOutlineArrowNarrowRight/> </Link>
          //             </button>
          //       </div>
          //     </div>
        
          // </div>
          <div  key={item.id}
          
               className={`${
              location.pathname === "/our-work"
                ? `col-${grid} col-${grid}-grider col-4`
                : " col-lg-4 col-md-6 col-12"
            }`}
          >
          <article className="card">
                <div className="temporary_image">
                      <img className='img' src={item.bage.imgUrl} alt={item.bage.title} />
                </div>
                <div className="card_content">
                    <span className="card_title">{item.bage.title}</span>
                        <span className="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
                        <Link className = "link_to" to={`/SingleProduct/${item.id}`}>See more</Link>
       
                </div>
        </article>
    
    </div>
        )
    })}
    
    </>
  );
};

export default ProjectsCard;
