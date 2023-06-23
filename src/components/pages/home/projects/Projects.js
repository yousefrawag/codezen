import React from 'react'
import { useTranslation } from 'react-i18next'
import './Projects.scss';
import { Link } from 'react-router-dom';
import Coustomheader from '../../../coustom_header/Coustomheader.jsx'
const Projects = () => {

  const { t } = useTranslation()
  const data = t('Projects', { returnObjects: true })

  return (
    <section className="projects">
      <div className="container">
       
            <Coustomheader title = {t("Projects_title")} />
        
        <div className="projects_container">
          <div className="row">
            {data.slice(0, 6).map((item) => {
              return (
                // this is the old code or the olde effect wit overlay fade
                // <div className="col-4"  key={item.id}>
                //   <div className="parent-content">
                //     <div className="image">  </div>
                //     <div className="overlay">
                  
                   
                //                 <Link className = "link_to" to={`/SingleProduct/${item.id}`}>See more</Link>
                   
                //     </div>
                //   </div>
                // </div>
                <div className="col-4" key={item.id}>
                      <article class="card">
                            <div class="temporary_image">
                                  <img className='img' src={item.bage.imgUrl} alt={item.bage.title} />
                            </div>
                            <div class="card_content">
                                <span class="card_title">{item.bage.title}</span>
                                    <span class="card_subtitle">Thsi is a subtitle of this page. Let us see how it looks on the Web.</span>
                                    <Link className = "link_to" to={`/SingleProduct/${item.id}`}>See more</Link>
                   
                            </div>
                    </article>
                
                </div>
              
               
          
              )
            })}
          </div>
        </div>
      </div>
      <div className="button-countainer text-center">
        <a href="/our-work">show more !</a>
      </div>
    </section>
  )
}

export default Projects