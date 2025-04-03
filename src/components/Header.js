import HeaderLink from './HeadrLink';
import '../index.css';
import expenseLogo from './images/expense.png';
const Home = () => {
    return ( 
        <>
   <header id="Header">
   <div className="logo">
  <img src={expenseLogo} alt="logo" style={{ width: '100px', height: '100px', objectFit: 'contain' ,    borderRadius: "50%"
 }} />
</div>
     <nav >        
        <ul className="nav-item" >
        <HeaderLink linkUrl="#AddTransaction" linkName="AS" />
        <HeaderLink linkUrl="#BalanceSummary" linkName="BS" />
        <HeaderLink linkUrl="#Header" linkName="Home" />
        <HeaderLink linkUrl="#About" linkName="About" />
        </ul>
       </nav>
   </header>
   <section id="cda">
   <div className="cta-container">
    <h1>Expense Tracker</h1>
    <h2>Take Control of Your Finances Today!</h2>
    <p>Track your expenses, set budgets, and save smarter with our easy-to-use expense tracker</p>
    <p>Sign up or log in to begin tracking your finances in seconds.</p>
    <a href="#About" id="cta-button">Get Started</a>
   </div> 
   </section>
   <section id="testimonials">
        <h2>What Our Users Are Saying</h2>
        <div className="M-testimonials">
        <div className="testimonial">
            <p>"This app has completely changed the way I manage my finances. The reminders help me stay on top of my bills, and the reports are super helpful!"</p>
            <p><strong>- Sara M.</strong></p>
        </div>
        <div className="testimonial">
            <p>"I’ve tried other expense tracker apps, but this one is by far the easiest to use. Plus, I love the expense categorization feature."</p>
            <p><strong>- James T.</strong></p>
        </div>
        </div>
    </section>
  
   </>
   
     );
}
 
export default Home;