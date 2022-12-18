import React, { useState } from "react";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

const AddRooms = () => {
  const navigate = useNavigate();
  const uid = v4();

  const [name, setName] = useState("");
  const [type, settype] = useState("");
  const [price, setprice] = useState(0);
  const [size, setsize] = useState(0);
  const [capacity, setcapacity] = useState(1);
  const [description, setdescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");

  const addRoomToJsonServer = () => {
    if(true){
      console.log('Properties listed')
    }
    // if (
    //   name &&
    //   type &&
    //   price &&
    //   size &&
    //   description &&
    //   extras &&
    //   image1 &&
    //   image2 &&
    //   image3 &&
    //   image4
    // ) {
    //   set(ref(db, `hotels/${uid}`), {
    //     sys: {
    //       id: uid,
    //     },
    //     fields: {
    //       name,
    //       slug: uid.toString(),
    //       type,
    //       price,
    //       size,
    //       capacity,
    //       pets,
    //       breakfast,
    //       featured: false,
    //       description,
    //       extras: extras.split(","),
    //       images: [
    //         {
    //           fields: {
    //             file: {
    //               url: image1,
    //             },
    //           },
    //         },
    //         {
    //           fields: {
    //             file: {
    //               url: image2,
    //             },
    //           },
    //         },
    //         {
    //           fields: {
    //             file: {
    //               url: image3,
    //             },
    //           },
    //         },
    //         {
    //           fields: {
    //             file: {
    //               url: image4,
    //             },
    //           },
    //         },
    //       ],
    //     },
    //   }).then(() => {
    //     alert("Room Added!");
    //     setName("");
    //     settype("");
    //     setcapacity(0);
    //     setdescription("");
    //     setextras("");
    //     setbreakfast(false);
    //     setpets(false);
    //     setprice(0);
    //     setsize(0);
    //     setImage1("");
    //     setImage2("");
    //     setImage3("");
    //     setImage4("");

    //     navigate("/rooms");
    //   });
    } 



  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 mx-auto col-12 card shadow-lg border-0 p-4">
          <div>
            <h1 className="display-4 text-center">Add Room</h1>
          </div>

          <div className="row my-4">
            <div className="col-md-12 col-12 my-auto">
              <div className="col-md-12 col-12 float-right">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      placeholder="Room name."
                      required
                    />
                    <label htmlFor="type">Type</label>
                    <input
                      type="text"
                      className="form-control"
                      value={type}
                      onChange={(e) => settype(e.target.value)}
                      id="type"
                      placeholder="Room type"
                      required
                    />

                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setprice(e.target.value)}
                      className="form-control"
                      required
                      id="price"
                      placeholder="Room price"
                    />
                    <label htmlFor="size">Size</label>
                    <input
                      type="number"
                      className="form-control"
                      value={size}
                      onChange={(e) => setsize(e.target.value)}
                      required
                      id="size"
                      placeholder="Room Size"
                    />
                    <label htmlFor="capacity">Capacity</label>
                    <input
                      type="number"
                      value={capacity}
                      onChange={(e) => setcapacity(e.target.value)}
                      className="form-control"
                      required
                      id="capacity"
                      placeholder="Capacitiy"
                    />

                    <label htmlFor="description">Description</label>
                    <textarea
                      className="form-control"
                      value={description}
                      onChange={(e) => setdescription(e.target.value)}
                      id="description"
                      placeholder="Short description of room."
                      rows="3"
                    ></textarea>

                    <label htmlFor="img1">Image 1</label>
                    <input
                      type="text"
                      value={image1}
                      onChange={(e) => setImage1(e.target.value)}
                      className="form-control"
                      id="img1"
                      placeholder="Image 1 URL"
                      required
                    />
                    <label htmlFor="img2">Image 2</label>
                    <input
                      type="text"
                      className="form-control"
                      value={image2}
                      onChange={(e) => setImage2(e.target.value)}
                      id="img2"
                      placeholder="Image 2 URL"
                      required
                    />
                  </div>

                  <div className="form-group form-check"></div>
                </form>
                <button
                  className="btn btn-block btn-outline-primary"
                  onClick={addRoomToJsonServer}
                >
                  ADD ROOM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRooms;
