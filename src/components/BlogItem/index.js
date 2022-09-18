import {Component} from 'react'
import './index.css'

class BlogItem extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="listItemContainer">
        <div className="listItemHeadContainer">
          <h1 className="title">{item.title}</h1>
          <p className="pubdate">{item.publishedDate}</p>
        </div>
        <p>{item.description}</p>
        <hr />
      </li>
    )
  }
}
export default BlogItem
