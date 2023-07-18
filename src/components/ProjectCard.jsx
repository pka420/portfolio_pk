import React from "react";

export class ProjectCard extends React.Component {

    state = {
        projectCount: 1,
    }

    clickLeft = () => {
        let num = this.state.projectCount-1;
        if ( num >= 0 ) {
            this.setState({projectCount: num})
        }
    }

    clickRight = () => {
        let num = this.state.projectCount+1;
        if ( num <= this.props.data.length ) {
            this.setState({projectCount: num})
        }
    }

    render() {
        const {data} = this.props;
        const {projectCount} = this.state;
        return (
            <div className="row">
                <div className="col">
                    <button 
                      onClick={() => this.clickLeft()}
                      id="project-left"
                    >
                      left
                    </button>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-12">     
                  <div className="card w-200">
                    <img src={data[projectCount].image} className="card-img-top project-wrapper__img" alt="Tree2" />
                    <div className="card-body">
                      <h5 className="project-wrapper__text-title">{data[projectCount].title}</h5>
                      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <div className="d-flex justify-content-between">
                      <div className="btn-group" role="group">
                        { data[projectCount].live_link != "" &&
                          <a target="_blank" rel="noreferer" href={data[projectCount].live_link} className="ml-2 cta-btn cta-btn--hero">View Live</a>
                        }
                        <a target="_blank" rel="noreferer" href={data[projectCount].source_code} className="ml-2 cta-btn cta-btn--hero">Source Code</a>        
                      </div>                      
                    </div></div>
                  </div>
              </div>
                {/* <div className="col-lg-4 col-sm-12">
                      <div className="project-wrapper__text load-hidden">
                        <h3 className="project-wrapper__text-title">{data[projectCount].title}</h3>
                        <div className="row">
                          <div className="col">
                            <p className="mb-4">
                              {data[projectCount].description}
                            </p>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                className="cta-btn cta-btn--hero"
                                href={data[projectCount].live_link}
                              >
                                See Live
                              </a>
                              <a
                                rel="noreferrer"
                                target="_blank"
                                className="cta-btn text-color-main"
                                href={data[projectCount].link}
                              >
                                Source Code
                              </a>
                            </div> */}
                            {/* {
                              Astro.props.image != "" &&
                              <div className="col-lg-8 col-sm-12">
                                <div className={ Astro.props.imageClassName != "" ? Astro.props.imageClassName : "project-wrapper__image load-hidden"} style={Astro.props.imageStyle}>
                                  <a rel="noreferrer" href={data[projectCount].link} target="_blank">
                                      <div
                                          data-tilt
                                          data-tilt-max="4"
                                          data-tilt-glare="true"
                                          data-tilt-max-glare="0.5"
                                          class="thumbnail rounded js-tilt"
                                      >
                                      <img
                                          alt="Project Image"
                                          class="img-fluid"
                                          src={data[projectCount].image}
                                      />
                                      </div>
                                  </a>
                                </div>
                              </div>
                            } */}
                          {/* </div>
                    </div>
                  </div> */}
    
                    
                <div className="col">
                    <button 
                      id="project-right"
                      onClick={this.clickRight}
                    >
                      right
                    </button>
                </div>
            </div>
        );
    }
}

export default ProjectCard;