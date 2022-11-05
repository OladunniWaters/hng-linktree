export default function Profile() {
  return (
      <div className="profile">
  
          <div tabIndex="0" class="profile__img__container">
               <img className="profile__img" id="profile__img" src="/Images/profile2.jpg" alt="Profile"/>
               <div className="overlay">
                 <img className="camera__icon" src="/Images/camera-icon.svg" alt=""/>
               </div>
          </div>
                  
          <h1 id="twitter">Oladunni Catherine</h1>
          <p className="slack"  id="slack">OladunniWaters</p>
          
        
      </div>
    )
}
