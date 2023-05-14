import style from "../../styles/Filter.module.css";
import Select from "react-select";
import data from "../cardSection/data.json";
import { useEffect, useState } from "react";
import options from "./state.json";
import ResultCard from "./ResultCard";
import swal from "sweetalert";
function Filter() {
  const [genderFilter, setGenderFilter] = useState("");
  const [ageFilter, setAgeFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [incomeFilter, setIncomeFilter] = useState("");
  const [casteFilter, setCasteFilter] = useState("");
  const [filterScholarship, setFilterScholarship] = useState([{
    "name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi ad pariatur",
    "age": "12-23",
    "cast": [
        "Gen"
    ],
    "state": "gujarat",
    "income": "100000",
    "physical_disability": "yes",
    "gender": [
        "male"
    ],
    "last_date": "2023-03-24",
    "desc": "",
    "image": "https://www.ssims.edu.in/wp-content/uploads/2020/03/ssit-students-scholarship-loans.jpg",
    "offer_by": "",
    "publish_date": "",
    "main_page_link": "",
    "document_req": "",
    "religion_eligibility": [],
    "education_criteria": "",
    "other_criteria": ""
}]);
  const [firstVisit, setFirstVisit] = useState(false);
  useEffect(() => {
    filterData();
  }, [
    genderFilter,
    ageFilter,
    stateFilter,
    incomeFilter,
    casteFilter,
    ageFilter,
  ]);

  function handleState({ label, value }) {
    setFirstVisit(true)
    setStateFilter(value);
  }

  function handleAge(e) {
    if(firstVisit==false){
      swal("First Select Any State","","error").then(()=>{window.location.reload()})
    }else{
      setAgeFilter(e.target.textContent);
    }
  }
  function handleGender(e) {
    if(firstVisit==false){
      swal("First Select Any State","","error").then(()=>{window.location.reload()})
    }else{
      setGenderFilter(e.target.textContent);
    }
  }
  function handleCast(e) {
    if(firstVisit==false){
      swal("First Select Any State","","error").then(()=>{window.location.reload()})
    }else{  
      setCasteFilter(e.target.textContent);
    }
  }
  function handleIncome(e) {
    if(firstVisit==false){
      swal("First Select Any State","","error").then(()=>{window.location.reload()})
    }else{
      setIncomeFilter(e.target.textContent);
    }
  }

  const filterData = () => {
    let filteredData = data;
    if (stateFilter !== "") {
      filteredData = filteredData.filter(
        (scholarship) => scholarship.state === stateFilter
      );
    }
    if (genderFilter !== "") {
      filteredData = filteredData.filter((scholarship) => {
        return scholarship.gender.includes(genderFilter.toLowerCase());
      });
    }

    if (incomeFilter !== "") {
      filteredData = filteredData.filter((item) => {
        switch (incomeFilter) {
          case "10K-1L":
            return item.income >= 10000 && item.income <= 100000;
          case "1L-3L":
            return item.incomes >= 100000 && item.income <= 300000;
          case "4L-6L":
            return item.income >= 400000 && item.income <= 600000;
          case "7L-9L":
            return item.income >= 700000 && item.income <= 900000;
          case ">10L":
            return item.income > 1000000;
        }
      });
    }

    if (casteFilter !== "") {
      filteredData = filteredData.filter((scholarship) => {
        return scholarship.cast.includes(casteFilter);
      });
    }
    if(firstVisit==true){
      
      setFilterScholarship(filteredData);
    }
  };

  const Error = () => {
   
      swal("Oops!", "No Scholarship Found", "error").then(()=>{window.location.reload()});
      
  };

  return (
    <div className={style.mainCon}>
      <div className={style.innerCon}>
        {/* Fiter  section start */}
        <div className={style.fiterTitle}>
          <div className="">
            <p>
              <b>
                <i>State</i>
              </b>
            </p>
            <div>
              <Select
                className={style.stateCon}
                defaultValue={"select state"}
                onChange={handleState}
                options={options}
              />
            </div>
          </div>
          <div>
            <p>
              <b>
                <i>Age</i>
              </b>
            </p>
            <div className={`${style.ageCon} ${style.common}`}>
              <input type={"radio"} name={"age"} id="11-20" />
              <label htmlFor="11-20" onClick={(e) => handleAge(e)}>
                11-20
              </label>

              <input type={"radio"} name={"age"} id="21-30" />
              <label htmlFor="21-30" onClick={(e) => handleAge(e)}>
                21-30
              </label>

              <input type={"radio"} name={"age"} id="31-35" />
              <label htmlFor="31-35" onClick={(e) => handleAge(e)}>
                31-35
              </label>

              <input type={"radio"} name={"age"} id=">35" />
              <label htmlFor=">35" onClick={(e) => handleAge(e)}>
                {">"}35
              </label>
            </div>
          </div>
          <div>
            <p>
              <b>
                <i>Gender</i>
              </b>
            </p>
            {/* Gender select radio input */}
            <div className={`${style.gender} ${style.common}`}>
              <input type={"radio"} name={"gender"} id="male" />
              <label htmlFor="male" onClick={(e) => handleGender(e)}>
                Male
              </label>

              <input type={"radio"} name={"gender"} id="female" />
              <label htmlFor="female" onClick={(e) => handleGender(e)}>
                Female
              </label>

              <input type={"radio"} name={"gender"} id="tran" />
              <label htmlFor="tran" onClick={(e) => handleGender(e)}>
                Other
              </label>
            </div>
          </div>
          <div>
            <p>
              <b>
                <i>Cast</i>
              </b>
            </p>
            {/* Cast select radio input */}
            <div className={`${style.cast} ${style.common}`}>
              <input type={"radio"} name={"cast"} id="general" />
              <label htmlFor="general" onClick={(e) => handleCast(e)}>
                Gen
              </label>

              <input type={"radio"} name={"cast"} id="OBC" />
              <label htmlFor="OBC" onClick={(e) => handleCast(e)}>
                OBC
              </label>

              <input type={"radio"} name={"cast"} id="EWS" />
              <label htmlFor="EWS" onClick={(e) => handleCast(e)}>
                EWS
              </label>

              <input type={"radio"} name={"cast"} id="ST" />
              <label htmlFor="ST" onClick={(e) => handleCast(e)}>
                ST
              </label>
            </div>
          </div>
          <div>
            <p>
              <b>
                <i>income</i>
              </b>
            </p>
            {/* Income select radio input */}
            <div className={`${style.income} ${style.common}`}>
              <input type={"radio"} name={"income"} id="10K-1L" />
              <label htmlFor="10K-1L" onClick={(e) => handleIncome(e)}>
                10K-1L
              </label>

              <input type={"radio"} name={"income"} id="1L-3L" />
              <label htmlFor="1L-3L" onClick={(e) => handleIncome(e)}>
                1L-3L
              </label>

              <input type={"radio"} name={"income"} id="4L-6L" />
              <label htmlFor="4L-6L" onClick={(e) => handleIncome(e)}>
                4L-6L
              </label>

              <input type={"radio"} name={"income"} id="7L-9L" />
              <label htmlFor="7L-9L" onClick={(e) => handleIncome(e)}>
                7L-9L
              </label>

              <input type={"radio"} name={"income"} id=">10L" />
              <label htmlFor=">10L" onClick={(e) => handleIncome(e)}>
                {">"}10L
              </label>
            </div>
          </div>
        </div>
        {/* Filter result section start */}
         {
             filterScholarship.length===0 ?  Error() : <ResultCard value={filterScholarship[0]}/>
         }
      </div>
    </div>
  );
}

export default Filter;
