import React,{useContext} from 'react';
import {StyleSheet} from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import {Context} from '../context/BlogContext';

const EditScreen = ({navigation})=>{
    
    const {state, editBlogPost }= useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost)=> blogPost.id === id);


    return(
            <BlogPostForm  
                initialValues= {{title :blogPost.title, content: blogPost.content}}
                onSubmit ={(title, content)=>{
                    editBlogPost(id, title, content, ()=> navigation.pop());
                }}
            />
        )

};

const styles = StyleSheet.create({

    input:{
        borderWidth: 1,
        fontSize: 18,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label :{
        fontSize: 20 ,
        marginBottom: 5,
        marginLeft: 5

    }
});

export default EditScreen;