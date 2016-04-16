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
    
    resumeChange: function(){
        this.setState({
           viewState: "resume" 
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
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.resumeChange}>
                                        Resume
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
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.resumeChange}>
                                        Resume
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
                                <li className="context_li">
                                    <a className="context_a context_a_hover arvo" onClick={this.resumeChange}>
                                        Resume
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
        else if(this.state.viewState=="resume"){
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
                                    <a className="context_a context_a_hover arvo" onClick={this.projectsChange}>
                                        Projects & Skills
                                    </a>
                                </li>
                                <li className="context_li">
                                    <a className="context_a selected context_a_hover arvo" onClick={this.resumeChange}>
                                        Resume
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
                                       Tech Stack: React.js, Chartist.js, HTML, Javascript, CSS, Gulp.js, Nginx, Tornado, RethinkDB
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
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               Relevant Courses Taken  
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                           <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI2270 Data Structures
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI2824 Discrete Structures
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI3104 Algorithms
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI3155 Principles of Programming Languages
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI3202 Intro to Artificial Intelligence
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI3287 Database Info Systems
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI3308 Software Engineering Methods and Tools
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI3656 Numerical Computation
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI3753 Operating Systems
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI4229 Computer Graphics
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI4448 Object Oriented Analysis & Design
                                   </span>
                               </li>
                               <li className="mdl-list__item">
                                   <span className="mdl-list__item-primary-content arvo">
                                       CSCI4830 Concurrent Programming
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
                   <div className="mdl-card projects_and_skills mdl-shadow--2dp">
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
                                       Proficient in/with C, C++, Java, Python, Tornado, HTML, CSS, Javascript, React.js, reQL, Chartist.js, and OpenGL
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
                                       Campus Consensus is a website looking to augment or replace CU's Student Course Questionnaire with user created
                                       groups and surveys and the visualization of response data from those surveys. 
                                       I was the head of the front end team with the biggest hand in creating most of the core functionality on the front end, 
                                       namely: user support, survey creation, survey taking, and survey data visualization. On the back end I helped construct
                                       some of the reQL (rethinkDB) queries and wrote some of the handlers for pages I created. 
                                   </div>
                               </li>
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="https://github.com/SFII/cufcq-new">
                                       CUFCQ <i className="fa fa-github icon"></i> 
                                   </a>
                               </li>
                               <li className="mdl-list__item">
                                   <div>
                                       CUFCQ is a website looking to aggregate and visualize Faculty Course Questionnaire and past 
                                       grade data from CU Boulder. I designed several pages and fixed and cleaned up page handlers.
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
       else if(this.props.viewState=="resume"){
           return(
                <div className="mdl-grid main_div">
                   <div className="mdl-card resume mdl-shadow--2dp">
                       <div className="mdl-card__title section_title">
                           <h3 className="mdl-card__title-text arvo">
                               Employment
                           </h3>
                       </div>
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               Resume Download
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                           <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   <a className="mdl-list__item-primary-content arvo" href="assets/resume/Resume.docx" download>
                                       Download Link 
                                   </a>
                               </li>
                           </ul>
                       </div>
                       <div className="mdl-card__title subsection_title">
                           <h3 className="mdl-card__title-text arvo">
                               Employment Status
                           </h3>
                       </div>
                       <div className="mdl-card__supporting-text">
                           <ul className="mdl-list">
                               <li className="mdl-list__item">
                                   I'm looking for an entry level position after I graduate!
                               </li>
                               <li className="mdl-list__item">
                                   I'm currently working at CU's Norlin Library and also with SFII for the duration of my
                                   senior project/capstone, but both of those will be both be done come graduation in May.
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
