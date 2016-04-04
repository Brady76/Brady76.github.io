var ContextDiv = React.createClass({
    
    getInitialState: function(){
        return{
            viewState: "work_experience"    
    
        }
    },
    
    workChange: function(){
        this.setState({
           viewState: "work_experience" 
        });    
    },
    
    educationChange: function(){
        this.setState({
            viewState: "education"    
        });    
    },
    
    projectsChange: function(){
        this.setState({
            viewState: "projects_and_skills"
        });    
    },
    
    render:function(){
        if(this.state.viewState=="work_experience"){
            return(
                <div>
                    <div className="context_card">
                            <ul className="context_ul">
                                <li className="context_li">
                                    <a className="context_a selected context_a_hover arvo" onClick={this.workChange}> 
                                        Work Experience
                                    </a>
                                </li>
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.educationChange}>
                                        Education
                                    </a>
                                </li>
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.projectsChange}>
                                        Projects & Skills
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <div>
                        <MainDiv viewState={this.state.viewState}/>
                    </div>
                </div>
            );
        }
        else if(this.state.viewState=="education"){
            return(
                <div>
                    <div className="context_card">
                            <ul className="context_ul">
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.workChange}> 
                                        Work Experience
                                    </a>
                                </li>
                                <li className="context_li">
                                    <a className="context_a selected context_a_hover arvo" onClick={this.educationChange}>
                                        Education
                                    </a>
                                </li>
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.projectsChange}>
                                        Projects & Skills
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <div>
                        <MainDiv viewState={this.state.viewState}/>
                    </div>
                </div>
            );
        }
        else if(this.state.viewState=="projects_and_skills"){
            return(
                <div>
                    <div className="context_card">
                            <ul className="context_ul">
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.workChange}> 
                                        Work Experience
                                    </a>
                                </li>
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.educationChange}>
                                        Education
                                    </a>
                                </li>
                                <li className="context_li">
                                    <a className="context_a selected context_a_hover arvo" onClick={this.projectsChange}>
                                        Projects & Skills
                                    </a>
                                </li>
                            </ul>
                    </div>
                    <div>
                        <MainDiv viewState={this.state.viewState}/>
                    </div>
                </div>
            );
        }
    }    
});

var MainDiv = React.createClass({
       
   render:function(){
       if(this.props.viewState == "work_experience"){
           return(
               <div className="mdl-grid main_div">
                   <div className="mdl-card work_experience mdl-shadow--2dp">
                       <div className="mdl-card__title section_title">
                           <h3 className="mdl-card__title-text arvo">
                               Work Experience
                           </h3>
                       </div>
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               Head Architect, SFII | Boulder, CO | August 2015 – Current
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                           <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Front end development team, back end liaison, documentation quality control
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Created a website where you create surveys and propagate them to user created groups
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Tech Stack: React.js, HTML, Javascript, CSS, Gulp, Nginx, Tornado, RethinkDB
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="https://github.com/SFII/scq">
                                       Repository <i className="fa fa-github icon"></i>           
                                   </a>
                               </li>
                           </ul>
                       </div>
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               Librarian, Norlin Library | Boulder, CO | June 2014 – Current 
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                            <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Reshelving, tech support, coordinating with other schools to obtain books & documents we didn't have
                                   </span>
                               </li>
                           </ul>                  
                       </div>
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               Crew Member, Wendy's | Thornton, CO | June 2012 – May 2013
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                            <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Food prep, cashier, dish washing, inventory, customer service
                                   </span>
                               </li>
                           </ul>                  
                       </div>
                   </div>
               </div>
           );
       }
       else if(this.props.viewState == "education"){
           return(
               <div className="mdl-grid main_div">
                   <div className="mdl-card education mdl-shadow--2dp">
                       <div className="mdl-card__title section_title">
                           <h3 className="mdl-card__title-text arvo">
                               Education
                           </h3>
                       </div>
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               General
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                           <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       University of Colorado at Boulder – College of Engineering & Applied Science
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       B.S. Computer Science, Computer Software track
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Anticipated: May 2016
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       GPA: 3.1
                                   </span>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>
           );
       }
       else if(this.props.viewState=="projects_and_skills"){
           return(
                <div className="mdl-grid main_div">
                   <div className="mdl-card education mdl-shadow--2dp">
                       <div className="mdl-card__title section_title">
                           <h3 className="mdl-card__title-text arvo">
                               Projects and Skills
                           </h3>
                       </div>
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               Skills
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                           <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Proficient in C, C++, Java, Python, Tornado, HTML, CSS, Javascript, React.js, and OpenGL
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Can work in Unix/Linux environment as well as Windows
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Proficient project lead
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       Quality customer service
                                   </span>
                               </li>
                           </ul>
                       </div>
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               Relevant & Interesting Projects  
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                           <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="https://github.com/SFII/scq">
                                       Campus Consensus <i className="fa fa-github icon"></i> 
                                   </a>
                               </li>
                               <li className="mdl-list__item">
                                   <div className="mdl-list__item-primary-content arvo">
                                       Campus Consensus was the main project I worked on while working with SFII for my senior capstone.
                                       It's my largest undertaking to date and I was the greatest contributor to the front end, it's 
                                       purpose is to create a system for creating and taking surveys related to the school and to visualize 
                                       that data in order to replace or augment a class/instructor review system deemed inefficient by many.
                                       I created a lot of basic handler functionality for additional pages past what our boilerplate had provided
                                       as well as most of the front end functionality, most impressively making the survey creation and response 
                                       cards using react and material design. 
                                   </div>
                               </li>
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="https://github.com/SFII/cufcq-new">
                                       CUFCQ <i className="fa fa-github icon"></i> 
                                   </a>
                               </li>
                               <li className="mdl-list__item">
                                   <div>
                                       CUFCQ was a side project I was invited to by other members of SFII focused on taking the school's current
                                       class/instructor review systems data and visualizing it and organizing it in a way that students and staff 
                                       would find helpful.  So far I've helped provide several key pages as well as improved on the handlers.
                                   </div>
                               </li>
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="https://github.com/Bradyta/ConcurrentProgramming">
                                       Concurrent Matrix Solver <i className="fa fa-github icon"></i> 
                                   </a>
                               </li>
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="https://github.com/Bradyta/TypeSpeedGame">
                                       Type Speed Game <i className="fa fa-github icon"></i> 
                                   </a>
                               </li>
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="https://github.com/Bradyta/OptimusPrime">
                                       Controllable Optimus Prime <i className="fa fa-github icon"></i> 
                                   </a>
                               </li>
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="https://youtu.be/PmffAuR5bmc">
                                       Optimus Prime Demo Video <i className="fa fa-youtube-play icon"></i> 
                                   </a>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>               
           );
       }
   
   } 
});
                        
ReactDOM.render(
    <ContextDiv />,
    document.getElementById('context_switch')
);
