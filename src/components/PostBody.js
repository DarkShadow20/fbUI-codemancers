export const PostBody = ({ post }) => {
    const {message,img}=post;
    return (
      <div className="bg-white mt-1 w-full p-1 md:p-0 md:max-w-lg rounded shadow">
        <div>
          <p className="py-3 px-2 flex m-1">{message}</p>
          {img && <img src={img} alt="" className="h-20 mx-3 my-2"/>}
        </div>
      </div>
    );
  };