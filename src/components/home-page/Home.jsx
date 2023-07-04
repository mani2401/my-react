import { useState, useEffect } from "react";


const Home = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    const response = await fetch('http://localhost:3000/employees');
    const data = await response.json();
    setPosts(data);
  }
  useEffect(()=>{
    fetchPosts();
  },[])
  return ( 
    <div className="home">
     {
      posts.map((post)=>{
       return (
       <div>
          <h1>{post.id}</h1>
          <p>{post.name}</p>
          <p>{ post.location }</p>
        </div>
        )
      })
     }
    </div>
   );
}
 
export default Home;