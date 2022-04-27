import React, { useState,useEffect } from "react";
import Navbar from "../../components/Navbar";
import Notification from "../../components/Notification";
import axios from "../../axios";

import { useNavigate,useParams } from "react-router-dom";

const Review = () => {

    const [review, setReview] = useState({ rating:"", comments:"" })
    const { id } = useParams()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setReview({ ...review, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('/users/review/'+id, review, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
            Notification("Success", "Reviewed Successfully!", "success")  
            navigate("/owner/history")
        } catch(e) {
            Notification("Warning", "Could not Review.", "danger")
        }
    }

  return (
    <>
      <Navbar />
      <div className="container-fluid ">
        <div className="container py-4">
          <h1 style={{ "text-align": "center" }}>Provide Feedback</h1>
        </div>
      </div>

      <div className="container-fluid pb-5">
        <div className="container">
          <div className="bg-primary py-2 px-4 px-sm-5">
            <form className="py-5">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Ratings"
                  required="required"
                  id="rating"
                  name="rating"
                  value={review.rating}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control border-0 p-4"
                  placeholder="Comments"
                  rows="4"
                  cols="50"
                  id="comments"
                  name="comments"
                  value={review.comments}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button className="btn btn-dark btn-block border-0 py-3" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
