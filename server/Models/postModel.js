// import mongoose from "mongoose";

// const postSchema = mongoose.Schema({
//     userId : {type: String, required: true},
//     desc: {type: String, required: true},
//     likes: [],
//     createAt: {
//         type: Date,
//         default: new Date()
//     },
//     image: String, 
// },
// {
//     timestamps: true
// })

// var PostModel =  mongoose.model("posts", postSchema)
// export default PostModel


import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
  },
  {
    timestamps: true,
  }
);

var PostModel = mongoose.model("Posts", postSchema);
export default PostModel;