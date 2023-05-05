import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Showitem extends Component {
  render() {

    let {title, description, img, url} = this.props;

    return (
 
<div>
  <div className="card" style={{width: '18rem'}}>
    <img src={img} className="card-img-top" alt="Not Available" style={{width: '100%', height: '250px'}}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <div dangerouslySetInnerHTML={{ __html: description.length > 200 ? description.slice(0,200)+'...' : description  }} />
      <Link to={url} target='blank' className="btn btn-sm btn-primary mx-2">Read More</Link>
      <Link to={`/book?title=${title}`} className="btn btn-sm btn-primary mx-2">Book Tickets</Link>   </div>
  </div>
</div>


    )
  }
}

export default Showitem