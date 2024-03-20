import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Lists from "./Lists";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        alldata: [],
        singledata: {
          title: "",
          author: ""
        }
      };
    }
    //handler
    getLists=()=>{
      fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(result => 
        this.setState({
          loading:false,
          alldata: result
        })
        )
        .catch(console.log);
    }
    render(){
      const listTable = this.state.loading ? (
        <span>Loading data....</span>
      ): (
        <Lists alldata={this.state.alldata}/>
      );
      return(
        <div className="container">
          <span className="title-bar">
          <button type="button" className="btn btn-primary" onClick={this.getLists}>
            Get list</button>
          </span>
          {listTable}

        </div>
      )
    }
  }

export default App;

//