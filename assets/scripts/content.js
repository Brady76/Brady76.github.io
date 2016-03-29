var MainDiv = React.createClass({
   
   componentDidMount: function(){
       componentHandler.upgradeDom();
   },
    
   render:function(){
       return(
       <div className="mdl-grid">
           <div className="mdl-card work_experience mdl-shadow--2dp">
               <div className="mdl-card__title title2">
                   <h3 className="mdl-card__title-text arvo">
                       Work Experience
                   </h3>
               </div>
               <div className="mdl-card__title title">
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
                               Repository           
                           </a>
                       </li>
                   </ul>
               </div>
               <div className="mdl-card__title title">
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
               <div className="mdl-card__title title">
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
});

/*
Do I really want to be this specific?
Wendy's
                       <li className="mdl-list__item">
                           <span className="mdl-list__item-primary-content arvo">
                               Maintain customer satisfaction
                           </span>
                       </li>
                       <li className="mdl-list__item">
                           <span className="mdl-list__item-primary-content arvo">
                               Worked high pressure rush hours to fit school schedule
                           </span>
                       </li>

Library

                       <li className="mdl-list__item">
                           <span className="mdl-list__item-primary-content arvo">
                               Coordinated with other schools to obtain books/documents we didn't have
                           </span>
                       </li>
                       <li className="mdl-list__item">
                           <span className="mdl-list__item-primary-content arvo">
                               Tech support when required
                           </span>
                       </li>

*/
ReactDOM.render(
    <MainDiv />,
    document.getElementById('react_div')
);

