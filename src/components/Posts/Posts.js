import { Component } from "react";
import SinglePost from "../SinglePost/SinglePost";

class Posts extends Component {
  state = {
    posts: [
      { title: "post 1", description: "post 1 desctiption " },
      { title: "post 2", description: "post 2 desctiption " },
    ],
    postTitle: "Posts Lists",
    showPosts:true,
  };

updateTitleHandler(title,e){
    console.log('updated title via function ...')
    e.preventDefault();
    this.setState({
        postTitle:title,
        
    })
}
titleHandler = (title,e) =>{
    e.preventDefault();
    console.log('updated title via property ..')
    this.setState({
        postTitle:title,
        
    })
}
togglePostsHandler= ()=>{
  this.setState({
    showPosts:!this.state.showPosts,
  })
}

  render() {
    let posts=null;
    
    // setTimeout(() => {
    //   console.log("modifying data...");
    //   const posts = [...this.state.posts];
    //   posts[0].title = "modified post 1";
    //   posts[1].title = "modified post 2";
    //   this.setState({
    //     posts,
    //   });
    //   this.setState({
    //     postTitle: "modified Title List",
    //   });
    // }, 3000);
    return (
      <div>
      
      <h2 className="text-2xl my-3">{this.state.postTitle}</h2>
      <button onClick={this.togglePostsHandler} className="px-5 py-3 bg-red-500 text-white" >Toggle Posts</button>
     {/* <div>
        <a href="www.google.com" onClick={this.updateTitleHandler.bind(this,'Modidied Title')} className="px-2 py-5 bg-red-500 rounded-3xl text-white">Update Post Title Via Func</a>
        <a href="www.google.com" onClick={this.titleHandler.bind(this,'Modidied Title')} className="px-2 py-5 bg-red-500 rounded-3xl text-white">Update Post Via Prop Title</a>
     </div>  */}
        <div className="flex my-3">
          <SinglePost
            title={this.state.posts[0].title}
            description={this.state.posts[0].description}
          ></SinglePost>
          <SinglePost
            title={this.state.posts[1].title}
            description={this.state.posts[1].description}
          ></SinglePost>
        </div>
      </div>
    );
  }
}
export default Posts;
