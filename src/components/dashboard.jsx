import React,{useEffect} from "react";
import { Link, Redirect } from "react-router-dom";
import "./dashboard.css";
import AllBlogs from "./allBlogs";
import { useDispatch, useSelector } from "react-redux";
import { addBlogItem, getBlogItem } from '../data/reducers/blog.reducer';

function Dashboard() {
    const userId = localStorage.getItem('userId');
    const dispatch = useDispatch();
    const getAllBlogItems = async (e) => {
        let payload = userId;
        try {
            let response = await dispatch(getBlogItem(payload));
            let res = await dispatch(addBlogItem(response.payload));
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getAllBlogItems();
    }, []);
    let blogLists = useSelector(state => state.todoReducer).blogList;
      const blogjsx=blogLists.map((item)=>(<AllBlogs title={item.title} description={item.description} image={item.img} id={item._id} />))
      const loggedIn=useSelector(state => state.userReducer).loggedIn;
      if(loggedIn===false){
          return <Redirect to="/"></Redirect>
      }
    return (
        <div id="allContent">
            {blogjsx}
        </div>
    );
}

export default Dashboard;