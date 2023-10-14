import './App.css';
import HomePage from './components/HomePage/HomePage';
import Company from './components/Company/Company';
import HowItWorks from './components/HowItWorks/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import FeaturedJobs from './components/FeaturedJobs/FeaturedJobs';
import Customer from './components/Customer/Customer';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Company />
      <HowItWorks />
      <WhyChooseUs />
      <FeaturedJobs />
      <Customer />
    </div>
  );
}

export default App;
