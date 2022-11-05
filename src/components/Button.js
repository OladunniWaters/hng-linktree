export default function Button() {
  return (
    <div>
    {/*Share links button*/}
         <div className="share__btn">
           <button className="share__icon">
               <img src="/Images/arrow-icon.svg" alt=""/>
           </button>
           <span className="tooltip">Share Link</span>
        </div> 
        
   {/*More button*/}      
         <button className="menu__icon">
             <img src="/Images/menu-icon.svg" alt=""/>
         </button>
         
         
   {/*Link Buttons*/}    
        <div className="button">
          
            <div className="wrap-container">
              <div className="wrap">
                <a id="twitter" href="https://twitter.com/OladunniCath/" target="_blank" rel="noreferrer" className="btn">
                    Twitter Link
               </a>    
               <button className="swipe-btn">
                       <img src="/Images/arrow-icon.svg" alt=""/>
               </button> 
             </div>  
            </div>     
            
            <div className="wrap-container">
            <div className="wrap">
               <a id="btn__zuri" href="https://training.zuri.team/" target="_blank" rel="noreferrer" className="btn">
                  Zuri Team
               </a>
               <button className="swipe-btn">
                       <img src="/Images/arrow-icon.svg" alt=""/>
               </button> 
             </div>  
            </div>   
               
            <div className="wrap-container">
            <div className="wrap">   
                <a id="books" href="https://books.zuri.team/" target="_blank" rel="noreferrer" title="click on the link to find books about design and coding" className="btn">
                  Zuri Books
               </a>
              <button className="swipe-btn">
                       <img src="/Images/arrow-icon.svg" alt=""/>
               </button> 
             </div>  
            </div>   
                  
             <div className="wrap-container">
            <div className="wrap">     
               <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<@OladunniWaters>" target="_blank" rel="noreferrer" title="the best python book that will take you from beginner to advanced programmer"  className="btn">
                  Python Books
               </a>
             <button className="swipe-btn">
                       <img src="/Images/arrow-icon.svg" alt=""/>
               </button> 
             </div>  
            </div>   
                   
           <div className="wrap-container">
            <div className="wrap">       
               <a id="pitch" href="https://background.zuri.team/" target="_blank" rel="noreferrer" title="Zuri team does quality background check on coders for you" className="btn">
                 Background Check for Coders
               </a>
             <button className="swipe-btn">
                       <img src="/Images/arrow-icon.svg" alt=""/>
               </button> 
             </div>  
            </div>   
                   
          <div className="wrap-container">
            <div className="wrap">        
               <a id="book__design" href="https://books.zuri.team/design-rules" target="_blank" rel="noreferrer" title="Click here to get a free design book by Zuri" className="btn">
                  Design Books
               </a>
              <button className="swipe-btn">
                       <img src="/Images/arrow-icon.svg" alt=""/>
               </button> 
             </div>  
            </div>  

            <div className="wrap-container">
             <div className="wrap">        
               <a id="contact" href="/contact"  rel="noreferrer" className="btn">
                  Contact Me
               </a>

              <button className="swipe-btn">
                       <img src="/Images/arrow-icon.svg" alt=""/>
               </button> 
             </div>  
            </div>

                
                
      </div>

         {/*Social link buttons*/}
           <div className="social__icon">
              <img className="slack__icon"  src="/Images/slack.svg" alt=""/>
              {/*<p id="slack">@OladunniWaters</p>*/}
              
              <a href="https://github.com/OladunniWaters" target="_blank" alt="Github Profile link" rel="noreferrer">
                <img src="/Images/github-icon.svg" alt=""/>
              </a>
          </div>
  
     </div>
    )
}

