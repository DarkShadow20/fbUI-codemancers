export const PostBody = ({ post }) => {
    const {message,img}=post;
    return (
      <div className="bg-white mt-1 w-full p-1 md:p-0 md:max-w-lg rounded shadow">
        <div>
          {/* {image && <img src={image} alt={name} className="mt-2" />} */}
          <p className="py-3 px-2">{message}</p>
          {img && <img src={img} alt="" className="h-20 mx-2 my-2"/>}
        </div>
      </div>
    );
  };