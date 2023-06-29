// import express from "express";
// import { unFollowUser, deleteUser, followUser, getUser, updateUser, getAllUsers} from "../Controllers/UserController.js";
// //import authMiddleWare from "../MiddleWare/authMiddleWare.js";


// const router = express.Router();

// router.get('/', getAllUsers)
// router.get('/:id', getUser)
// router.put('/:id', updateUser)
// router.delete('/:id', deleteUser)
// router.put('/:id/follow', followUser)
// router.put('/:id/unfollow', unFollowUser)

// export default router;


import express from "express";
import { deleteUser, followUser, getAllUsers, getUser, UnFollowUser, updateUser } from "../Controllers/UserController.js";
import authMiddleWare from "../MiddleWare/authMiddleWare.js";

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id',authMiddleWare, updateUser)
router.delete('/:id',authMiddleWare, deleteUser)
router.put('/:id/follow',authMiddleWare, followUser)
router.put('/:id/unfollow',authMiddleWare, UnFollowUser)
export default router;