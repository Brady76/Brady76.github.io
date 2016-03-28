var MainDiv = React.createClass({
   render:function(){
       return(
           <div className="mdl-card">
               <div className="mdl-card__title">
                   Work Experience
               </div>
               <div className="mdl-card__supporting-text">
           
                <ul className="mdl-list">
           
                  <li className="mdl-list__item mdl-list__item--three-line">
                    <span className="mdl-list__item-primary-content">
                      <span>
                          Crew Member, Wendy's | Thornton, CO | June 2012 – May 2013
                      </span>
                    </span>
           
                  </li>

                  <li className="mdl-list__item mdl-list__item--three-line">
                    <span className="mdl-list__item-primary-content">
                      <span>
                          Librarian, Norlin Library | Boulder, CO | June 2014 – Current
                      </span>
                    </span>
           
                  </li>
           
                  <li className="mdl-list__item mdl-list__item--three-line">
                    <span className="mdl-list__item-primary-content">
                      <span>
                          Head Architect, SFII | Boulder, CO |August 2015 – Current
                      </span>
                      <span className="mdl-list__item-text-body">
                        <ul className="mdl-list">
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                Front end development team, back end liaison, documentation quality control
                                </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                Created a website where you create surveys and propagate them to user created groups
                                </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-list__item-primary-content">
                                Tech Stack: React.js, HTML, Javascript, CSS, Gulp, Nginx, Tornado, RethinkDB
                                </span>
                            </li>
                        </ul>
                      </span>
                    </span>
                  </li>
                </ul>
               </div>
           </div>
       );
   } 
});

ReactDOM.render(
    <MainDiv />,
    document.getElementById('react_div')
);