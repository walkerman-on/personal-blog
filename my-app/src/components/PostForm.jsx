import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput"
import MyButton from "./UI/button/MyButton"


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})

    const addNewPost = (event) => {
        event.preventDefault()

        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: "", body:""})
      }
      
    return (
<form className="formMain">
        <MyInput
            value = {post.title}
            onChange = {event => setPost({...post, title: event.target.value})}
            type = "text" 
            placeholder="Название поста"/>
        <MyInput
            value = {post.body}
            onChange = {event => setPost({...post, body: event.target.value})}
            type = "text" 
            placeholder="Описание поста"/>
        <MyButton disabled = {!post.title || !post.body} onClick = {addNewPost}>Создать</MyButton>
      </form>
    );
};

export default PostForm;