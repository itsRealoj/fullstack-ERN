import React, { Component } from 'react';

 


class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            comment: '',
            messages: []
        }
    };

    // componentDidMount(){
    //     fetch('/users').then(res => res.json()).then(messages => this.setState({messages},console.log(messages)));
    // }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);

    //     fetch('http://localhost:8000/users', this.state, {
    //         headers: {
    //         "Content-Type": "application/x-www-form-urlencoded",
    //         // "Content-Type": "multipart/form-data",
    //     },
    //         method: "post"
    // }).then((res) => res.json())
    //         .then((data) =>  console.log(data))
    //         .catch((err)=>console.log(err))

     fetch('http://127.0.0.1/users', {
        method: 'post',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET',
          'Access-Control-Allow-Headers: X-PINGOTHER': 'Content-Type'
        },
        body: this.state
      }).then(res=>res.json())
        .then(res => console.log(res));


    };

    render(){
        const { name, phone, comment} = this.state;
        return(
            <div>
                <form method='post' action='/users' onSubmit={this.handleSubmit} style={{margin:"40px auto", width:"50%"}}>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" value={name} id="name" placeholder="Enter First Name" name="name" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="phone" className="col-sm-2 col-form-label">Phone:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" value={phone} id="phone" placeholder="Enter phone" name="phone" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="comment" className="col-sm-2 col-form-label">comment:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" value={comment} id="comment" placeholder="Write message" name="comment" onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>

            </div>
        )
    }
}
export default ContactForm;