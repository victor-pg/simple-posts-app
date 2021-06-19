const Post = require('../models/PostModel');

const get = async (req, res) => {
    try {
        const response = await Post.findAll();
        if(!response)return res.status(500).json({ message: "Server error" })

        res.json(response);
    } catch (error) {
        console.log(error)
    }
}
const getOne = async (req, res) => {
    try {
        const {id}=req.params
        const response = await Post.findAll({
            where:{
                id
            }
        });
        if (response.length===0) return res.status(500).json({ message: "Post with that id does not exists" })
        res.json(response)
    } catch (error) {
        console.log(error)
    }
}

const post = async (req, res) => {
    try {
        const { title, body } = req.body;
        const newPost = await Post.create({ title, body });
        if (!newPost) return res.status(500).json({ message: "Cannot save new post" })

        res.status(201).json({ message: "New post was created succesfully" })
    } catch (error) {
        console.log(error)
    }
}

const postDelete = async (req,res) => {
    try {
        const {id} = req.params;
        const response = await Post.destroy({
            where: {
                id
            }
        })

        if (!response) return res.status(500).json({ message: "Error while deleting" })

        res.status(201).json({ message: "Deleted succesfully" })
    } catch (error) {

    }
}

const postUpdate = async (req,res) => {
    try {
        const{id}=req.params;
        const {title,body}=req.body;
        const response = await Post.findAll({
            where:{
                id
            }
        });

        if (response.length===0) return res.status(500).json({ message: "Post with that id does not exists" })
        await Post.update({
            title,
            body
        },{
            where:{
                id
            }
        })
        res.status(201).json({ message: "Updated succesfully" })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    get,
    getOne,
    post,
    postDelete,
    postUpdate
}