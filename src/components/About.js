import '../index.css';
const About = () => {
    return ( 
        <section id="About"  className="about-container">
        <div className="about-content">
        <h1>About Expense Tracker</h1>
        <p>
          Welcome to Expense Tracker, a simple and efficient way to manage your personal finances.
          This application helps you keep track of your income and expenses, ensuring that you have
          better control over your financial situation.
        </p>
        
        <h2>Features:</h2>
        <ul>
          <li>Add and categorize transactions (Income & Expenses).</li>
          <li>View your financial balance at a glance.</li>
          <li>Store transactions using local storage for persistent data.</li>
          <li>Filter and manage transactions based on categories and dates.</li>
        </ul>
        
        <h2>How It Works:</h2>
        <p>
          Simply enter your transactions by specifying the amount, description, category, and date.
          The system will automatically update your balance and store the data so you can review it anytime.
        </p>
        
        <p>
          Stay on top of your finances with our easy-to-use expense tracking system. Happy budgeting!
        </p>
      </div>
</section>

     );
}
 
export default About;