import { useRef, useState } from "react";
import { HiOutlinePhotograph } from "react-icons/hi";

import axios from "axios";
export const PostInput = ({ msgObj, setMsgObj }) => {
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const[styleState,setStyle]=useState(false)
    const[imageStatus,setImageStatus]=useState(false);
    const[urlList,setList]=useState([]);
    const [inputStatus, setInputStatus] = useState(false);
    const [gifInput, setGifInput] = useState();
    const inputEl = useRef(null);
    const gifInputEl = useRef(null);

    const giphyApi = (target) => {
        const search = target;
        const key = "26uo5oDseUkjRADzF3a9R6q79Njjef1A";
        const limit = 10;
        const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;
        axios.get(url).then((res) => {
          const data = res.data.data;
          const imageUrlList = data.map((item) => item.images.downsized.url);
          setList(imageUrlList);
          console.log(imageUrlList);
        });
      };
  const canSave = Boolean(content) || Boolean(image);
  const onChangeHandler = (e) => setContent(e.target.value);
  const clickHandler = () => {
    setMsgObj([
      ...msgObj,
      {
        id: msgObj.length + 1,
        message: content,
        img:image,
        timestamp: Date.now(),
      },
    ]);
    inputEl.current.value = " ";
    setInputStatus(false); 
    setImageStatus(false);
     };
  const gifHandler=(e)=>{
    setGifInput(e.target.value);  
    giphyApi(gifInput)
  }
  function imgHandler(url) {
    setStyle(false);
    setImage(url.target.src);
    setImageStatus(true)
    gifInputEl.current.value = " ";
  }
  const imageList = urlList.map((url) => {
    return (
      <li className="list-none m-1">
        <img
          className="image"
          src={url}
          alt=""
          onClick={(url) => imgHandler(url)}
        />
      </li>
    );
  });
  return (
    <div className="input-box bg-white pt-3 mb-5 w-full md:max-w-lg rounded shadow">
      <div className="flex pl-2 py-3x">
        <textarea
          ref={inputEl}
          className="resize-auto rounded mx-3 my-1 p-1 w-full bg-gray-100"
          placeholder="what do you have in mind ?"
          onChange={onChangeHandler}
          
        ></textarea>
      </div>
      {imageStatus&&<img src={image} alt="" className="mx-4 my-1 p-1 h-10"/>}
      <div className="flex justify-between mb-2 mt-2">
        <div className="flex items-center">
          <label
            htmlFor="file"
            className="flex cursor-pointer items-center rounded p-2 ml-14 font-medium  hover:bg-gray-100"
          >
            <HiOutlinePhotograph className="text-xl text-green-400" />
            <span className="text-gray-700" onClick={() => { setInputStatus(true); setStyle(true);}}>
              Add GIF
            </span>
          </label>
          {inputStatus && <input className="bg-gray-100" onChange={gifHandler} ref={gifInputEl}/>}
        </div>
        {styleState ? <div className="overflow-y-auto h-40">{imageList}</div> : <></>}
        <button
          className=" mr-3 md:mr-5 px-8 bg-blue-500 text-white ring rounded-full hover:bg-blue-700 hover:shadow"
          disabled={!canSave}
          onClick={clickHandler}
        >Post
        </button>
      </div>
    </div>
  );
};
