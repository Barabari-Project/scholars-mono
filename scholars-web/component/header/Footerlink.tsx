import React from 'react'
import style from '../../styles/footer.module.css';


function Footerlink() {
  return (
    <>
    <div>
    <footer className={style.footerdistributed}>
    
    <div className={style.footerleft}>
        <h3>Scholarship<span>_Villa</span></h3>
    
        <p className={style.footerlinks}>
            <a href="#">Home</a>
            |
            <a href="#">About</a>
            |
            <a href="#">Contact</a>
            |
            <a href="#">Blog</a>
        </p>
    
        <p className={style.footercompanyname}>Copyright © 2023 <strong>thebarabariproject</strong> All rights reserved</p>
    </div>
    
    <div className={style.footercenter}>
        <div>
            <i className="fa fa-map-marker"></i>
            <p><span>Telangana</span>
                Hydrabad</p>
        </div>
    
        <div>
            <i className="fa fa-phone"></i>
            <p>+91 74**9**258</p>
        </div>
        <div>
            <i className="fa fa-envelope"></i>
            <p><a href="mailto:thebarabariproject@gmail.com">thebarabariproject@gmail.com</a></p>
        </div>
    </div>
    <div className={style.footerright}>
        <p className={style.footercompanyabout}>
            <span>About the Organization</span>
            <strong>The barabari project</strong> is a NGO where more than 22 candidates are IN TRAINING 
            Students Here trained by Mentor Of Top IT Companies
            and 6 people are placed in MNC companies
            from "4 Different STATES"
        </p>
        
        <div className={style.footericons}>
           <div className={style.icons1}> <a href="#"><i className="fa-brands fa-facebook"></i></a></div>
           <div className={style.icons2}> <a href="https://www.instagram.com/thebarabariproject/"><i className="fa-brands fa-instagram" ></i></a></div>
           <div className={style.icons3}> <a href="https://www.linkedin.com/company/the-barabari-project/"><i className="fa-brands fa-linkedin"></i></a></div>
           <div className={style.icons5}> <a href="#"><i className="fa-brands fa-youtube"></i></a></div>
           <div className={style.icons4}> <a href="https://twitter.com/BarabariProject"><i className="fa-brands fa-twitter"></i></a></div>
        </div>
        
    </div>
    </footer>
    </div>
    </>
  )
}

export default Footerlink
