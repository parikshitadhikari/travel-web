import { FaThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import Comment from "./Comment";
import { generateRandomNumber } from "../../services/generateRandomNumber";

/**
 * Represents a post.
 * @typedef {Object} Post
 * @property {number} id - The ID of the post.
 * @property {{ username: string }} user - The user who created the post.
 * @property {string} description - The description of the post.
 * @property {string} created_at - The creation date of the post.
 * @property {string} img - The image URL of the post.
 * @property {Comment[]} postcomment_set - The set of comments on the post.
 */
export interface Post {
  id: number;
  user: { username: string };
  description: string;
  created_at: string;
  img: string;
  postcomment_set: Comment[];
}

/**
 * Represents a comment.
 * @typedef {Object} Comment
 * @property {number} id - The ID of the comment.
 * @property {number} post - The ID of the post the comment is associated with.
 * @property {string} comment - The text of the comment.
 * @property {number} commented_by - The ID of the user who commented.
 */
export interface Comment {
  id: number;
  post: number;
  comment: string;
  commented_by: number;
}

/**
 * Props for the Post component.
 * @typedef {Object} Props
 * @property {Post} post - The post data.
 * @property {boolean} [inModal=false] - Flag to indicate if the post is displayed in a modal.
 */
interface Props {
  post: Post;
  inModal?: boolean;
}

/**
 * A component that displays an individual post with its details, comments, and interaction buttons.
 *
 * @param {Props} props - Props for the component.
 * @returns {JSX.Element} The `Post` component.
 */
const Post = ({ post, inModal = false }: Props) => {
  const profileImage =
    "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=";

  const imageClassName = inModal
    ? "mt-3 w-auto max-h-60 rounded-lg"
    : "max-h-80 w-auto mx-auto";

  return (
    <div className="mx-32 my-1 bg-white rounded-3xl border border-gray-300 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
      <div className="p-7">
        <div className="flex items-center space-x-3 overflow-hidden rounded-full">
          <img
            className="w-10 h-10 rounded-full"
            src={profileImage}
            alt="Profile"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">
              {post.user.username}
            </p>
            <p className="text-xs text-gray-500">
              {post.created_at.slice(0, 10)}
            </p>
          </div>
        </div>

        <p className="mt-3 text-gray-800">{post.description}</p>

        <img
          className={`mt-3 w-full rounded-lg ${imageClassName}`}
          src={`http://localhost:8000/${post.img}/`}
          alt="Post"
        />

        <div className="flex justify-between items-center mt-3 mx-4 text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <FaThumbsUp />
            <span>{generateRandomNumber()}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <span>{generateRandomNumber()}</span>
            <FaRegCommentAlt />
          </button>
        </div>

        <div className="mt-3 flex items-center">
          <div className="flex-grow flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
            <input
              className="bg-transparent flex-grow text-sm outline-none"
              type="text"
              placeholder="Write a comment..."
            />
            <IoMdSend className="text-gray-500 text-2xl ml-2 hover:text-blue-600" />
          </div>
        </div>
      </div>
      {inModal && (
        <div>
          {post.postcomment_set && (
            <div className="mt-4">
              <h3 className="text-md font-semibold mb-2 ml-6">Comments</h3>
              {post.postcomment_set.map(({ comment, commented_by }, index) => (
                <Comment
                  username={`${commented_by}`}
                  comment={comment}
                  date={`${new Date().getFullYear()}`}
                  key={index}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
