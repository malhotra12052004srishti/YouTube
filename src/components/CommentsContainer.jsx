/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from 'react'

const commentsData = [
  {
    name: "Srishti Malhotra",
    text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
    replies: [],
  },
  {
    name: "Srishti Malhotra",
    text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
    replies: [
      {
        name: "Srishti Malhotra",
        text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
        replies: [],
      },
      {
        name: "Srishti Malhotra",
        text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
        replies: [
          {
            name: "Srishti Malhotra",
            text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
            replies: [
              {
                name: "Srishti Malhotra",
                text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
                replies: [
                  {
                    name: "Srishti Malhotra",
                    text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
                    replies: [
                      {
                        name: "Srishti Malhotra",
                        text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Srishti Malhotra",
                    text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Srishti Malhotra",
    text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
    replies: [],
  },
  {
    name: "Srishti Malhotra",
    text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
    replies: [],
  },
  {
    name: "Srishti Malhotra",
    text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
    replies: [],
  },
  {
    name: "Srishti Malhotra",
    text: "Lorem ipsum dolor sit amet, consectecur adip 🚀 ",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
        {/* The first level comments are rendering here */}
      <Comment data={comment} /> 
      <div className="pl-5 ml-5">
        {/* n-level comments rendering */}
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
