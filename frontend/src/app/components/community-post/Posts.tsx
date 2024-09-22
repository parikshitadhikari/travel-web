"use client";
import { useEffect, useState } from "react";
import Modal from "./Model";
import CreatePost from "./CreatePost";
import SinglePost, { Post } from "./SinglePost";
// import apiClient from "../../services/apiClient";
// import { getToken } from "../../services/token";
import { FaSeedling } from "react-icons/fa";

/**
 * Props for Posts component.
 * @typedef {Object} Props
 * @property {string} className - Additional CSS class for styling.
 */
interface Props {
  className: string;
}

/**
 * A component that displays a list of posts and handles the creation of new posts.
 *
 * @param {Props} props - Props for the component.
 * @returns {JSX.Element} The `Posts` component.
 */
const Posts = ({ className }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Fetches posts on component mount
//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await apiClient.get("/api/post", {
//           headers: { Authorization: `Bearer ${getToken()}` },
//         });
//         setPosts(response.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };
//     fetchPosts();
//   }, []);

  /**
   * Handles the click event on a post, setting the selected post and opening the modal.
   *
   * @param {Post} post - The post object that was clicked.
   */
  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  // Closes the modal and resets the selected post
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className={`${className} bg-green-50`}>
      <CreatePost
        onPostSubmit={async () => {
          // Function logic for creating a post (optional)
          // Consider fetching posts again after a new post is added
        }}
      />
      <div
        className={`flex flex-col justify-between items-center ${className}`}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => handlePostClick(post)}
            className="m-0.5 p-2 rounded-xl cursor-pointer"
          >
            <SinglePost post={post} />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="mx-auto max-w-4xl max-h-[90vh] overflow-y-hidden bg-gray-200 p-4 rounded-lg">
          {selectedPost && <SinglePost post={selectedPost} inModal={true} />}
        </div>
      </Modal>
      <div className="fixed bottom-10 right-10 bg-green-600 p-4 rounded-full shadow-md hover:bg-green-700 transition-colors">
        <FaSeedling className="text-white text-2xl" />
      </div>
    </div>
  );
};

export default Posts;
