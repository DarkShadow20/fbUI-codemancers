import React, { useState } from "react";
import { orderPostByDate } from "./utils/orderPostByDate";
import { PostInput } from "./PostInput";
import { PostBody } from "./PostBody";
export const PostList = () => {
  const postObj = [
    {
      id: 1,
      message: "Hi",
      img: "",
      timestamp: Date.now(),
    },
  ];
  const [msgObj, setMsgObj] = useState(postObj);
  
  const orderedPost = orderPostByDate(msgObj);
  let renderContent;

  renderContent =
    msgObj.length === 0 ? (
      <div className="text-center">
        <p className="p-2">No posts found</p>
      </div>
    ) : (
      React.Children.toArray(
        orderedPost?.map((post) => <PostBody post={post} />)
      )
    );

  return (
    <>
      <PostInput msgObj={msgObj} setMsgObj={setMsgObj} />
      {renderContent}
    </>
  );
};
