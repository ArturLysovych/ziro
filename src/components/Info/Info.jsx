import { React, useState, useEffect } from 'react'
import './css/Info.css';

export default function Info() {

    const [freelancerCount, setFreelancerCount] = useState(0);
    const [visitorsCount, setVisitorsCount] = useState(0);
    const [contractCount, setContractCount] = useState(0);
    const [companiesCount, setCompaniesCount] = useState(0);
    const [funcCalled, setFuncCalled] = useState(false);
  
    useEffect(() => {
      const containerTop = document.querySelector('.Info').getBoundingClientRect().top;
      const setCount = (number, updateFunction, delay) => {
        let thisNum = 0;
        let addTimeOut;
        const increment = () => {
          thisNum += 100;
          updateFunction(thisNum);
          if (thisNum < number) addTimeOut = setTimeout(increment, delay);
          else if (thisNum >= number) {
            thisNum -= thisNum - number;
            updateFunction(thisNum);
            clearTimeout(addTimeOut);
          }
        };
        increment();
      };
      const handleScroll = () => {
        const scrollPos = window.scrollY;
        if (scrollPos >= containerTop - 500 && !funcCalled) {
          setCount(36789, setFreelancerCount, 2);
          setCount(45973, setVisitorsCount, 1);
          setCount(56461, setContractCount, 1);
          setCount(852, setCompaniesCount, 150);
          setFuncCalled(true);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [funcCalled]);
    
  return (
    <div className='Info'>
        <div className="container">
            <div className="info-container">
                <h2>
                    {freelancerCount}
                    <span>Talented Freelancer</span>
                </h2>
                <h2>
                    {visitorsCount}
                    <span>Visitors</span>
                </h2>
                <h2>
                    {contractCount}
                    <span>Contract Made</span>
                </h2>
                <h2>
                    {companiesCount}k
                    <span>Companies</span>
                </h2>
            </div>
        </div>
    </div>
  )
}