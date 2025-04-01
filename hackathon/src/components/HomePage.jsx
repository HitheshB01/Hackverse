// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Heart, MessageCircle, Send, PlusCircle, Image ,X} from "lucide-react";

// // Import images from assets
// import gardenImage from "../assets/garden.jpeg";
// import yogaImage from "../assets/yoga.jpeg";
// import gamesImage from "../assets/games.jpeg";
// import parkImage from "../assets/park.jpeg";
// import paintingImage from "../assets/painting.jpeg";

// const initialPosts = [
//   { id: 1, name: "John Doe", age: 65, text: "Had a wonderful time at the community garden today! 🌱", image: gardenImage, likes: 12, comments: [] },
//   { id: 2, name: "Jane Smith", age: 62, text: "Yoga session was refreshing. Thanks to everyone who joined! 🧘‍♂️", image: yogaImage, likes: 18, comments: [] },
//   { id: 3, name: "Sarah Williams", age: 68, text: "Had a great time playing board games! 🎲", image: gamesImage, likes: 15, comments: [] },
//   { id: 4, name: "David Brown", age: 66, text: "Lovely evening walk in the park. 🌳", image: parkImage, likes: 20, comments: [] },
//   { id: 5, name: "Emma Davis", age: 64, text: "Exploring creativity in painting class! 🎨", image: paintingImage, likes: 30, comments: [] },
// ];

// export default function HomePage() {
//   const [posts, setPosts] = useState(initialPosts);
//   const [newPost, setNewPost] = useState({ text: "", image: null });
//   const [stories, setStories] = useState([{ id: 1, image: paintingImage }]);
//   const [newStory, setNewStory] = useState(null);

//   // Infinite Scroll for Posts
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
//         loadMorePosts();
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const loadMorePosts = () => {
//     setPosts((prev) => [
//       ...prev,
//       ...prev.map((post, index) => ({
//         ...post,
//         id: prev.length + index + 1,
//       })),
//     ]);
//   };

//   // Handle Story Upload
//   const handleStoryUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file);
//       setNewStory(imageURL);
//     }
//   };

//   // Like Post
//   const handleLike = (postId) => {
//     setPosts((prevPosts) =>
//       prevPosts.map((post) =>
//         post.id === postId ? { ...post, likes: post.liked ? post.likes - 1 : post.likes + 1, liked: !post.liked } : post
//       )
//     );
//   };

//   // Add Story (Updates in Real-Time)
//   const handleAddStory = () => {
//     if (newStory) {
//       setStories([{ id: stories.length + 1, image: newStory }, ...stories]);
//       setNewStory(null);
//     }
//   };

//   // Handle Post Input
//   const handlePostChange = (e) => setNewPost({ ...newPost, text: e.target.value });

//   // Handle Post Image Upload
//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const imageURL = URL.createObjectURL(file);
//       setNewPost({ ...newPost, image: imageURL });
//     }
//   };

//   // Add Post (Updates in Real-Time)
//   const handleAddPost = () => {
//     if (newPost.text || newPost.image) {
//       setPosts([{ id: posts.length + 1, name: "You", age: "N/A", ...newPost, likes: 0, comments: 0 }, ...posts]);
//       setNewPost({ text: "", image: null });
//     }
//   };

//   const [commentPopup, setCommentPopup] = useState(null);
//   const [commentText, setCommentText] = useState("");

//   // Open Comment Popup
//   const openCommentPopup = (postId) => {
//     setCommentPopup(postId);
//     setCommentText("");
//   };

//   // Add Comment
//   const addComment = () => {
//     if (commentText.trim() !== "") {
//       setPosts((prevPosts) =>
//         prevPosts.map((post) =>
//           post.id === commentPopup
//             ? { ...post, comments: [...post.comments, commentText] }
//             : post
//         )
//       );
//       setCommentPopup(null);
//     }
//   };

//   const [selectedStory, setSelectedStory] = useState(null);

//   const handleStoryClick = (story) => {
//     setSelectedStory(story);
//     setTimeout(() => setSelectedStory(null), 4000); // Story disappears after 4 seconds
//   };

//   return (
//     <div className="bg-[#f5eac4] min-h-screen pb-20 pt-0">
//       {/* 📸 Stories Section */}
//       <div className="mt-5 px-4 pt-10 flex space-x-3 overflow-x-auto scrollbar-hide">
//     {/* Add Story Button */}
//     <label className="w-20 h-20 flex flex-col items-center justify-center bg-[#DBE2EF] rounded-lg shadow-md cursor-pointer hover:bg-[#807861] transition-all">
//       <input type="file" accept="image/*" onChange={handleStoryUpload} className="hidden" />
//       <PlusCircle size={28} className="text-[#112D4E]" />
//       <span className="text-xs text-[#112D4E]">Add Story</span>
//     </label>

//     {/* User Stories */}
//     {stories.map((story, index) => (
//       <motion.div
//         key={index}
//         className="w-20 h-20 rounded-lg overflow-hidden border-2 border-[#3F72AF] hover:border-[#112D4E] transition-all cursor-pointer"
//         whileHover={{ scale: 1.05 }}
//         onClick={() => handleStoryClick(story)}
//       >
//         <img src={story.image} alt="Story" className="w-full h-full object-cover" />
//       </motion.div>
//     ))}

//     {/* Fullscreen Story Popup */}
//     {selectedStory && (
//       <div className="fixed inset-0 flex items-center justify-center bg-[#c6cbcfc7] backdrop-blur-lg z-50">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           className="relative w-80 h-80 rounded-lg overflow-hidden"
//         >
//           <img src={selectedStory.image} alt="Full Story" className="w-full h-full object-cover" />
//           <button
//             onClick={() => setSelectedStory(null)}
//             className="absolute top-2 right-2 bg-gray-800 text-white p-1 rounded-full"
//           >
//             <X size={20} />
//           </button>
//         </motion.div>
//       </div>
//     )}
//   </div>

//       {/* Add Story Button */}
//       {newStory && (
//         <div className="px-4 mt-3">
//           <button
//             onClick={handleAddStory}
//             className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg hover:bg-[#112D4E] transition-all"
//           >
//             Add Story
//           </button>
//         </div>
//       )}

//       {/* ✏️ Add Post Section */}
//       <div className="px-4 mt-6">
//         <div className="bg-white p-4 rounded-lg shadow-md border border-[#DBE2EF]">
//           <textarea
//             placeholder="What's on your mind?"
//             value={newPost.text}
//             onChange={handlePostChange}
//             className="w-full p-2 border border-[#DBE2EF] rounded resize-none text-lg"
//           />
//           {newPost.image && <img src={newPost.image} alt="New Post" className="w-full mt-2 rounded" />}
//           <div className="flex items-center justify-between mt-3">
//             <label className="flex items-center text-[#ae792b] cursor-pointer hover:text-[#112D4E] transition-all">
//               <Image size={24} className="mr-1" />
//               <span>Add Image</span>
//               <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
//             </label>
//             <button
//               onClick={handleAddPost}
//               className="bg-[#ae792b] text-white px-4 py-2 rounded-lg hover:bg-[#112D4E] transition-all"
//             >
//               Post
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* 🌟 Community Posts (Infinite Scroll) */}
//       <div className="mt-6 px-4 space-y-6">
//         {posts.map((post, index) => (
//           <motion.div
//             key={post.id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="bg-white rounded-lg shadow-md overflow-hidden border border-[#DBE2EF]"
//           >
//             <img src={post.image} alt="Post" className="w-full h-56 object-cover" />
//             <div className="p-4">
//               <h2 className="text-xl font-bold text-[#112D4E]">{post.name}, {post.age}</h2>
//               <p className="text-gray-600 text-lg">{post.text}</p>

//                {/* Like & Comment Actions */}
//                <div className="flex items-center justify-between mt-3">
//                 <button
//                   className={`flex items-center transition-all ${post.liked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
//                   onClick={() => handleLike(post.id)}
//                 >
//                   <Heart size={20} className="mr-1" fill={post.liked ? "red" : "none"} />
//                   <span>{post.likes} Likes</span>
//                 </button>
//                 <button
//                   className="flex items-center text-gray-600 hover:text-blue-500 transition-all"
//                   onClick={() => openCommentPopup(post.id)}
//                 >
//                   <MessageCircle size={20} className="mr-1" />
//                   <span>{post.comments.length} Comments</span>
//                 </button>
//                 <button className="text-gray-600 hover:text-green-500 transition-all">
//                   <Send size={20} />
//                 </button>
//               </div>

//               {/* Display Comments */}
//               {post.comments.length > 0 && (
//                 <div className="mt-3 bg-gray-100 p-2 rounded-md">
//                   {post.comments.map((comment, index) => (
//                     <p key={index} className="text-gray-700">💬 {comment}</p>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//       {commentPopup !== null && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-80">
//             <button
//               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
//               onClick={() => setCommentPopup(null)}
//             >
//               <X size={24} />
//             </button>
//             <h3 className="text-lg font-semibold">Add a Comment</h3>
//             <textarea
//               value={commentText}
//               onChange={(e) => setCommentText(e.target.value)}
//               placeholder="Write your comment here..."
//               className="w-full p-2 border border-gray-300 rounded mt-2"
//             ></textarea>
//             <button
//               onClick={addComment}
//               className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-700 transition-all w-full"
//             >
//               Post Comment
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Send, PlusCircle, Image, X } from "lucide-react";
import axios from "axios";
import { db } from "./firebase";
import { collection, addDoc, getDocs, query, orderBy, limit, startAfter, doc } from "firebase/firestore";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dnfqbcatz/image/upload";
const UPLOAD_PRESET = "my_unsigned_preset";
const POSTS_PER_PAGE = 5;

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ text: "", image: null });
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  // Fetch initial data
  useEffect(() => {
    fetchInitialPosts();
    fetchStories();
  }, []);

  const fetchInitialPosts = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(POSTS_PER_PAGE)
      );
      const querySnapshot = await getDocs(q);
      
      const fetchedPosts = querySnapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data(),
        // Ensure createdAt exists for proper pagination
        createdAt: doc.data().createdAt || new Date().toISOString()
      }));
      
      setPosts(fetchedPosts);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(fetchedPosts.length === POSTS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchMorePosts = async () => {
    if (!hasMore || loading || !lastVisible) return;
    
    setLoading(true);
    try {
      const q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        startAfter(lastVisible),
        limit(POSTS_PER_PAGE)
      );
      
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setHasMore(false);
        return;
      }
      
      const newPosts = querySnapshot.docs.map(doc => ({ 
        id: doc.id, 
        ...doc.data(),
        createdAt: doc.data().createdAt || new Date().toISOString()
      }));
      
      setPosts(prev => [...prev, ...newPosts]);
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(newPosts.length === POSTS_PER_PAGE);
    } catch (error) {
      console.error("Error fetching more posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const lastPostRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        fetchMorePosts();
      }
    }, { threshold: 0.5 });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const fetchStories = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "stories"));
      setStories(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const response = await axios.post(CLOUDINARY_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data.secure_url;
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Image upload failed. Please try again.");
      return null;
    }
  };

  const handleAddPost = async () => {
    if (!newPost.text && !newPost.image) return;

    const postData = {
      text: newPost.text,
      image: newPost.image,
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(), // Ensure createdAt is always set
      name: "You"
    };

    try {
      const docRef = await addDoc(collection(db, "posts"), postData);
      setPosts(prev => [{ id: docRef.id, ...postData }, ...prev]);
      setNewPost({ text: "", image: null });
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleAddStory = async () => {
    if (!newStory) return;

    try {
      const docRef = await addDoc(collection(db, "stories"), { 
        image: newStory,
        createdAt: new Date().toISOString() // Add timestamp for stories too
      });
      setStories(prev => [{ id: docRef.id, image: newStory }, ...prev]);
      setNewStory(null);
    } catch (error) {
      console.error("Error adding story:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await uploadToCloudinary(file);
      if (imageUrl) {
        setNewPost({ ...newPost, image: imageUrl });
      }
    }
  };

  const handleStoryUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = await uploadToCloudinary(file);
      if (imageUrl) {
        setNewStory(imageUrl);
      }
    }
  };

  return (
    <div className="bg-[#f5eac4] min-h-screen pb-20 pt-0">
      {/* Stories Section */}
      <div className="mt-5 px-4 pt-10 flex space-x-3 overflow-x-auto scrollbar-hide">
        <label className="w-20 h-20 flex flex-col items-center justify-center bg-[#DBE2EF] rounded-lg shadow-md cursor-pointer hover:bg-[#807861] transition-all">
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleStoryUpload} 
            className="hidden" 
          />
          <PlusCircle size={28} className="text-[#112D4E]" />
          <span className="text-xs text-[#112D4E]">Add Story</span>
        </label>
        
        {stories.map((story) => (
          <motion.div 
            key={story.id}
            className="w-20 h-20 rounded-lg overflow-hidden border-2 border-[#3F72AF]"
            whileHover={{ scale: 1.05 }}
          >
            <img src={story.image} alt="Story" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>

      {/* Add Story Button */}
      {newStory && (
        <div className="px-4 mt-3">
          <button 
            onClick={handleAddStory}
            className="bg-[#3F72AF] text-white px-4 py-2 rounded-lg hover:bg-[#112D4E] transition-all"
          >
            Add Story
          </button>
        </div>
      )}

      {/* Add Post Section */}
      <div className="px-4 mt-6">
        <motion.div 
          className="bg-white p-4 rounded-lg shadow-md border border-[#DBE2EF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <textarea 
            placeholder="What's on your mind?" 
            value={newPost.text} 
            onChange={(e) => setNewPost({...newPost, text: e.target.value})}
            className="w-full p-2 border rounded text-lg focus:outline-none focus:ring-2 focus:ring-[#ae792b]"
          />
          
          {newPost.image && (
            <div className="relative mt-2">
              <img src={newPost.image} alt="New Post" className="w-full rounded" />
              <button 
                onClick={() => setNewPost({...newPost, image: null})}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
              >
                <X size={16} />
              </button>
            </div>
          )}
          
          <div className="flex items-center justify-between mt-3">
            <label className="flex items-center cursor-pointer text-[#3F72AF] hover:text-[#112D4E]">
              <Image size={24} className="mr-1" />
              <span>Add Image</span>
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="hidden" 
              />
            </label>
            
            <button 
              onClick={handleAddPost}
              disabled={!newPost.text && !newPost.image}
              className={`px-4 py-2 rounded-lg ${
                newPost.text || newPost.image 
                  ? 'bg-[#ae792b] hover:bg-[#8a5e22]' 
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white transition-all`}
            >
              Post
            </button>
          </div>
        </motion.div>
      </div>

      {/* Posts Section with Infinite Scroll */}
      <div className="mt-6 px-4 space-y-6">
        <AnimatePresence>
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              ref={index === posts.length - 1 ? lastPostRef : null}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-[#DBE2EF]"
            >
              {post.image && (
                <img 
                  src={post.image} 
                  alt="Post" 
                  className="w-full h-56 object-cover"
                  loading="lazy" // Add lazy loading for images
                />
              )}
              
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#112D4E]">{post.name}</h2>
                <p className="text-gray-600 text-lg mt-1">{post.text}</p>
                
                <div className="flex items-center justify-between mt-3">
                  <button className="flex items-center text-gray-600 hover:text-red-500">
                    <Heart size={20} className="mr-1" />
                    <span>{post.likes} Likes</span>
                  </button>
                  
                  <button className="flex items-center text-gray-600 hover:text-blue-500">
                    <MessageCircle size={20} className="mr-1" />
                    <span>{post.comments.length} Comments</span>
                  </button>
                  
                  <button className="text-gray-600 hover:text-green-500">
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {loading && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#ae792b]"></div>
          </div>
        )}
        
        {!hasMore && !loading && posts.length > 0 && (
          <p className="text-center text-gray-500 py-4">No more posts to show</p>
        )}
      </div>
    </div>
  );
}