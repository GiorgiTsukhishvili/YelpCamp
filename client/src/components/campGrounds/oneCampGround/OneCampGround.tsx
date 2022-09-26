import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "./../../../api";
import { Comments, OneCampGroundInterface } from "./oneCampGroundInterface";
import { Link, useNavigate } from "react-router-dom";

const OneCampGround = () => {
  const [camp, setCamp] = useState<OneCampGroundInterface>();
  const [comment, setComment] = useState<Comments>({
    name: "",
    comment: "",
  });
  const [deleteCamp, setDeleteCamp] = useState<boolean>(false);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchSingleCamp(id!);

        setCamp(data.data.data.campGround);

        console.log(data.data.data.campGround);
      } catch (err) {
        history("/error");
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const updateComments = async () => {
      if (camp?.comments) {
        await api.updateComments(id!, camp?.comments);
      }
    };
    updateComments();
  }, [camp?.comments]);

  const removeCamp = async () => {
    await api.deleteSingleCamp(id!);
    setDeleteCamp(true);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (camp) {
      setCamp({ ...camp, comments: [...camp.comments, comment] });
    }
  };

  const updateComment = (value: string, key: string) => {
    setComment((prevComment) => {
      return { ...prevComment, [value]: key };
    });
  };

  return deleteCamp ? (
    <div className="flex mx-auto my-20 flex-col justify-center items-center">
      <h1 className="text-2xl mb-10">Campground Deleted Successfully</h1>
      <Link
        to="/campgrounds"
        className="bg-blue-500 text-white px-5 py-2 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
      >
        Go to all campgrounds
      </Link>
    </div>
  ) : camp !== undefined ? (
    <Fragment>
      <div className="flex my-10 justify-center items-start mx-20 border-[1.5px] border-gray-400">
        <img
          src={camp.image}
          alt="Campground"
          className="w-[500px] h-[500px] bg-contain"
        />
        <div>
          <h1 className="pl-3 text-xl mt-3 font-bold text-black">
            {camp.title}
          </h1>
          <h1 className="pl-3 mt-3">{camp.description}</h1>
          <h1 className="pl-3 mt-3 text-gray-400">{camp.location}</h1>
          <h1 className="pl-3 mt-3">${camp.price}/night</h1>
          <div className=" ml-3 my-3">
            <Link
              to={`/edit/${camp._id}`}
              className="mr-4 bg-blue-500 text-white px-5 py-1.5 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
            >
              EDIT
            </Link>
            <button
              className="bg-red-500 text-white px-5 py-1.5 text-md rounded-[8px] hover:bg-red-600 transition-all duration-300"
              onClick={() => removeCamp()}
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <h1 className="text-2xl font-bold">Comments</h1>

        {camp.comments.length > 0 &&
          camp.comments.map((comment) => (
            <div className="flex my-5">
              <h1 className="mr-5 text-xl">{comment.name}:</h1>
              <h1 className="text-xl">{comment.comment}</h1>
            </div>
          ))}

        <h1 className="text-2xl font-bold">Add Comment</h1>
        <form
          onSubmit={handleCommentSubmit}
          className="flex mx-auto my-10 flex-col"
        >
          <label
            htmlFor="comment-name"
            className="text-xl text-black cursor-pointer mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="comment-name"
            className="border-[2px] mb-5 border-gray-500 focus:border-gray-500 px-2 focus:outline-none rounded-[8px] py-1.5 w-[400px]"
            value={comment.name}
            onChange={(e) => updateComment("name", e.target.value)}
          />
          <label
            htmlFor="comment-description"
            className="text-xl text-black cursor-pointer mb-1"
          >
            Comment
          </label>
          <textarea
            id="comment-description"
            cols={30}
            rows={3}
            required
            placeholder="Campground Description"
            className="border-[2px] mb-5 border-gray-500 focus:border-gray-500 px-2 focus:outline-none rounded-[8px] py-1.5 w-[400px]"
            value={comment.comment}
            onChange={(e) => updateComment("comment", e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 w-[300px] text-white px-5 py-2 text-md rounded-[8px] hover:bg-blue-600 transition-all duration-300"
          >
            Add Comment
          </button>
        </form>
      </div>
    </Fragment>
  ) : (
    <div></div>
  );
};

export default OneCampGround;
