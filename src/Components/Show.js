import React, { Component } from 'react'
import Showitem from './Showitem'


export class Show extends Component {


    constructor(){
        super();
        console.log("Constructor")
        this.state = {
            shows : [],
            page : 1
        }
    }


        async componentDidMount() {
            let url = "https://api.tvmaze.com/search/shows?q=all";
            let data = await fetch(url);
            let parsedData = await data.json();
            let showsArray = parsedData.map((item) => item.show);
            this.setState({
              shows: showsArray,
            });
          }


  render() {
    
    return (


<div className='container my-3'>
  <h1>Shows</h1>
  <div className="row">
    {this.state.shows.map((element) => {
      return (
        <div className="col-md-4 mb-4" key={element.id}>
          <div>
            <Showitem
              title={element.name}
              description={element.summary}
              img={element.image ? element.image.original : ""}
              url={element.url}
            />

          </div>
        </div>
      );
    })}
  </div>
</div>


    )
  }
}

export default Show