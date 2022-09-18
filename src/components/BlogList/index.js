import {Component} from 'react'
import BlogItem from '../BlogItem'
import './index.css'

class BlogsList extends Component {
  render() {
    const {blogsList} = this.props
    return (
      <ul>
        {blogsList.map(each => (
          <BlogItem key={each.id} id={each.id} item={each} />
        ))}
      </ul>
    )
  }
}
export default BlogsList
