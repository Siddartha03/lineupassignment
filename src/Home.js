import React, { Component } from 'react';
import './Home.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      accept : "", accept2 :"", accept3 :"", accept4 :"", accept5 :"", accept6 :"",
      reject : "",reject2 : "", reject3 : "", reject4 : "", reject5 : "", reject6 : "",
      candidates: 3, candidates2: 5, candidates3: 10, candidates4: 3, candidates5: 10, candidates6: 4
    }
  }
  accept = () => {
    this.setState({
      reject : "",
      accept: "Accepted"
    })
    this.alertAccept();
  }
  reject = () => {
    this.setState({
      accept : "",
      reject: "Rejected"
    })
    this.alertReject();
  }
  accept2 = () => {
    this.setState({
      reject2: "",
      accept2: "Accepted"
    })
    this.alertAccept();
  }
  reject2 = () => {
    this.setState({
      accept2 : "",
      reject2 : "Rejected"
    })
    this.alertReject();
  }
  accept3 = () => {
    this.setState({
      reject3 : "",
      accept3 : "Accepted"
    })
    this.alertAccept();
  }
  reject3 = () => {
    this.setState({
      accept3 : "",
      reject3 : "Rejected"
    })
    this.alertReject();
  }
  accept4 = () => {
    this.setState({
      reject4 : "",
      accept4 : "Accepted"
    })
    this.alertAccept();
  }
  reject4 = () => {
    this.setState({
      accept4 : "",
      reject4 : "Rejected"
    })
    this.alertReject();
  }
  accept5 = () => {
    this.setState({
      reject5 : "",
      accept5 : "Accepted"
    })
    this.alertAccept();
  }
  reject5 = () => {
    this.setState({
      accept5 : "",
      reject5: "Rejected"
    })
    this.alertReject();
  }
  accept6 = () => {
    this.setState({
      reject6 : "",
      accept6 : "Accepted"
    })
    this.alertAccept();
  }
  reject6 = () => {
    this.setState({
      accept6 : "",
      reject6 : "Rejected"
    })
    this.alertReject();
  }
  alertAccept = () => {
    alert("You are accepted!");
  }
  alertReject = () => {
    alert("You are rejected!");
  }
  candidates = () => {
    this.setState({
      candidates: this.state.candidates+1
    })
  }
  candidates2 = () => {
    this.setState({
      candidates2: this.state.candidates2+1
    })
  }
  candidates3 = () => {
    this.setState({
      candidates3: this.state.candidates3+1
    })
  }
  candidates4 = () => {
    this.setState({
      candidates4: this.state.candidates4+1
    })
  }
  candidates5 = () => {
    this.setState({
      candidates5: this.state.candidates5+1
    })
  }
  candidates6 = () => {
    this.setState({
      candidates6: this.state.candidates6+1
    })
  }
  render() {
    return (
      <div>
        <input type="checkbox" id="check"></input>
        <label for="check">
            <i className="fa fa-bars" id='btn'></i>
            <i className="fa fa-times" id="cancel"></i>
        </label>
        <div className="sidebar">
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Candidates</a></li>
                <hr></hr>
                <label><b>Jobs</b></label>
                <li><a href="#">Live Jobs</a></li>
                <li><a href="#">Accepted Jobs</a></li>
                <li><a href="#">Rejected Jobs</a></li>
                <hr></hr>
                <label><b>Support</b></label>
                <li><a href="#">Help Desk</a></li>
                <li><a href="#">Tutorial</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </div>
        <section>
          <div className="profile">
                  <div className='column1'>
                    <div className="center">
                      <p className="title">Full Stack Developer</p><br></br>
                      <p className="company">Company name:- <b>LineUp</b></p><br></br>
                      Location:- 
                      <u className="location"> Bengaloore</u><br></br>
                      <hr className='line'></hr><br></br>
                      <u>
                        <i class="fa fa-address-card" aria-hidden="true"> 123453</i>
                        <i class="fa fa-briefcase" aria-hidden="true"> 7-10 yrs</i>
                      </u><p></p><br></br>
                      <i class="fa fa-calendar-o" aria-hidden="true"> Full Time</i><br></br><br></br>
                      <u>
                      <i class="fa fa-user" aria-hidden="true"> {this.state.candidates} Candidates</i>
                      <i class="fa fa-money" aria-hidden="true"> 23 - 25 Lakhs</i>
                      </u><br></br>
                      <button className="candidates" onClick={this.candidates}>Add candidates</button><br></br><br></br>
                      <div className="buttons">
                        <button onClick={this.accept} className="accept">Accept</button>
                        <button onClick={this.reject} className="reject">Reject</button>
                      </div>
                      <u className="result">{this.state.accept}</u>
                      <u className="result2">{this.state.reject}</u>
                    </div>
                  </div>
                  <div className='column1'>
                  <div className="center">
                      <p className="title">App Developer</p><br></br>
                      <p className="company">Company name:- <b>Xorient</b></p><br></br>
                      Location:- 
                      <u className="location"> Hyderabad</u><br></br>
                      <hr className='line'></hr><br></br>
                      <u>
                        <i class="fa fa-address-card" aria-hidden="true"> 123465</i>
                        <i class="fa fa-briefcase" aria-hidden="true"> 6-8 yrs</i>
                      </u><p></p><br></br>
                      <i class="fa fa-calendar-o" aria-hidden="true"> Full Time</i><br></br><br></br>
                      <u>
                      <i class="fa fa-user" aria-hidden="true"> {this.state.candidates2} Candidates</i>
                      <i class="fa fa-money" aria-hidden="true"> 10 - 15 Lakhs</i>
                      </u><br></br>
                      <button className="candidates" onClick={this.candidates2}>Add candidates</button><br></br><br></br>
                      <div className="buttons">
                        <button onClick={this.accept2} className="accept">Accept</button>
                        <button onClick={this.reject2} className="reject">Reject</button>
                      </div>
                      <u className="result">{this.state.accept2}</u>
                      <u className="result2">{this.state.reject2}</u>
                    </div>
                  </div>
                  <div className='column1'>
                  <div className="center">
                      <p className="title">Software Developer</p><br></br>
                      <p className="company">Company name:- <b>TCS</b></p><br></br>
                      Location:- 
                      <u className="location"> Hyderabad</u><br></br>
                      <hr className='line'></hr><br></br>
                      <u>
                        <i class="fa fa-address-card" aria-hidden="true"> 123455</i>
                        <i class="fa fa-briefcase" aria-hidden="true"> 6-10 yrs</i>
                      </u><p></p><br></br>
                      <i class="fa fa-calendar-o" aria-hidden="true"> Full Time</i><br></br><br></br>
                      <u>
                      <i class="fa fa-user" aria-hidden="true"> {this.state.candidates3} Candidates</i>
                      <i class="fa fa-money" aria-hidden="true"> 6 - 10 Lakhs</i>
                      </u><br></br>
                      <button className="candidates" onClick={this.candidates3}>Add candidates</button><br></br><br></br>
                      <div className="buttons">
                        <button onClick={this.accept3} className="accept">Accept</button>
                        <button onClick={this.reject3} className="reject">Reject</button>
                      </div>
                      <u className="result">{this.state.accept3}</u>
                      <u className="result2">{this.state.reject3}</u>
                    </div>
                  </div>
          </div>
          <div className="profile">
                  <div className='column1'>
                    <div className="center">
                      <p className="title">Backend Developer</p><br></br>
                      <p className="company">Company name:- <b>LineUp</b></p><br></br>
                      Location:- 
                      <u className="location"> Noida</u><br></br>
                      <hr className='line'></hr><br></br>
                      <u>
                        <i class="fa fa-address-card" aria-hidden="true"> 123653</i>
                        <i class="fa fa-briefcase" aria-hidden="true"> 7-10 yrs</i>
                      </u><p></p><br></br>
                      <i class="fa fa-calendar-o" aria-hidden="true"> Full Time</i><br></br><br></br>
                      <u>
                      <i class="fa fa-user" aria-hidden="true"> {this.state.candidates4} Candidates</i>
                      <i class="fa fa-money" aria-hidden="true"> 15 - 20 Lakhs</i>
                      </u><br></br>
                      <button className="candidates" onClick={this.candidates4}>Add candidates</button><br></br><br></br>
                      <div className="buttons">
                        <button onClick={this.accept4} className="accept">Accept</button>
                        <button onClick={this.reject4} className="reject">Reject</button>
                      </div>
                      <u className="result">{this.state.accept4}</u>
                      <u className="result2">{this.state.reject4}</u>
                    </div>
                  </div>
                  <div className='column1'>
                  <div className="center">
                      <p className="title">Computer Network Architect</p><br></br>
                      <p className="company">Company name:- <b>Reliance</b></p><br></br>
                      Location:- 
                      <u className="location"> New Delhi</u><br></br>
                      <hr className='line'></hr><br></br>
                      <u>
                        <i class="fa fa-address-card" aria-hidden="true"> 123785</i>
                        <i class="fa fa-briefcase" aria-hidden="true"> 5-8 yrs</i>
                      </u><p></p><br></br>
                      <i class="fa fa-calendar-o" aria-hidden="true"> Full Time</i><br></br><br></br>
                      <u>
                      <i class="fa fa-user" aria-hidden="true"> {this.state.candidates5} Candidates</i>
                      <i class="fa fa-money" aria-hidden="true"> 7 - 12 Lakhs</i>
                      </u><br></br>
                      <button className="candidates" onClick={this.candidates5}>Add candidates</button><br></br><br></br>
                      <div className="buttons">
                        <button onClick={this.accept5} className="accept">Accept</button>
                        <button onClick={this.reject5} className="reject">Reject</button>
                      </div>
                      <u className="result">{this.state.accept5}</u>
                      <u className="result2">{this.state.reject5}</u>
                    </div>
                  </div>
                  <div className='column1'>
                  <div className="center">
                      <p className="title">Information Security Analyst</p><br></br>
                      <p className="company">Company name:- <b>XLPAT</b></p><br></br>
                      Location:- 
                      <u className="location"> Hyderabad</u><br></br>
                      <hr className='line'></hr><br></br>
                      <u>
                        <i class="fa fa-address-card" aria-hidden="true"> 123685</i>
                        <i class="fa fa-briefcase" aria-hidden="true"> 4-8 yrs</i>
                      </u><p></p><br></br>
                      <i class="fa fa-calendar-o" aria-hidden="true"> Full Time</i><br></br><br></br>
                      <u>
                      <i class="fa fa-user" aria-hidden="true"> {this.state.candidates6} Candidates</i>
                      <i class="fa fa-money" aria-hidden="true"> 8 - 12 Lakhs</i>
                      </u><br></br>
                      <button className="candidates" onClick={this.candidates6}>Add candidates</button><br></br><br></br>
                      <div className="buttons">
                        <button onClick={this.accept6} className="accept">Accept</button>
                        <button onClick={this.reject6} className="reject">Reject</button>
                      </div>
                      <u className="result">{this.state.accept6}</u>
                      <u className="result2">{this.state.reject6}</u>
                    </div>
                  </div>
             </div> <br></br> <br></br> <br></br>

        </section>
      </div>
    );
  }
  }
  
  export default Home;
