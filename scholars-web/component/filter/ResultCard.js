import style from "../../styles/Filter.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard , faUsersViewfinder,
      faHospitalUser,faMapLocationDot,
      faHandHoldingDollar,faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
function ResultCard({value}){
    function handleStr(name){
        if(name?.length> 56){
            name = name?.slice(0,56);
            name = name + "...";
            return name
         }
         return name;
       }
       function handleCast(cast){
        let str = "";
        let pre=""
       for(let num=0;num<cast?.length;num++){
          if(num==0){
              str=cast[num];
          }else{
              str=pre+"/"+cast[num];
          }
          pre=str;
       }
       return str;
     }
     function handleGender(gen){
        let str = "";
        let pre=""
       for(let num=0;num<gen?.length;num++){
          if(num==0){
              str=gen[num];
          }else{
              str=pre+"/"+gen[num];
          }
          pre=str;
       }
       return str;
     }
     function handleClick(){
        console.log("Clicked")
        router.push(`/detail`);
     }
     
    return(
        <div className={style.fiterResult__root} >
           <div className={style.fiterRes__innerCon} >
           <p className={style.heading}>{handleStr(value?.name)}</p>
                    <div>
                     
                         <FontAwesomeIcon icon={faHospitalUser} size="sm" style={{color: "#010409",}} />
                         <p>{value?.age}</p>
                     </div>
                     <div className={style.cast}>
                         {/* <h3>Cast</h3> */}
                         <FontAwesomeIcon icon={faIdCard} size="sm" style={{color: "#080808",}} />
                         <p>{handleCast(value?.cast)}</p>
                     </div>
                     <div >
                         {/* <h3>State</h3> */}
                         <FontAwesomeIcon icon={faMapLocationDot} size="sm" style={{"--fa-primary-color": "#0c0d0d", "--fa-secondary-color": "#051024",}} />
                         <p>{value?.state}</p>
                     </div>
                     <div>
                         {/* <h3>Income</h3> */}
                         <FontAwesomeIcon icon={faHandHoldingDollar} size="sm" style={{color: "#010204",}} />
                         <p>{value?.income}</p>
                     </div>
                     <div  >
                         {/* <h3>Gender</h3> */}
                         <FontAwesomeIcon icon={faUsersViewfinder} size="sm" style={{color: "#0a0a0a",}} />
                         <p >{handleGender(value?.gender)}</p>
                     </div>
                   <button onClick={()=>{handleClick}}>Visit</button>
           </div>
        </div>
    )
}
export default ResultCard