import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";

import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import style from "../CSS/FlightCSS.module.css";

function SearchPart() {
  const [startDate, setStartDate] = useState(null);
  const [value, setValue] = useState("Economy");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className={style.head}>
        <div className={style.flightformcont}>
          <div className={style.flightformoutmost}>
            <div className={style.flightformbox}>
              <div className={style.flightform}>
                <div className={style.flightformfilter}>
                  <div className={style.flightformradio}>
                    <FormControl component="fieldset">
                      <RadioGroup
                        row
                        aria-label="radio"
                        value={value}
                        onChange={handleChange}
                        name="controlled-radio-buttons-group"
                        defaultValue="One-way"
                      >
                        <FormControlLabel
                          value="Round-trip"
                          control={<Radio />}
                          label="Round-trip"
                        />
                        <FormControlLabel
                          value="One-way"
                          control={<Radio />}
                          label="One-way"
                        />
                        <FormControlLabel
                          value="Multi-city"
                          control={<Radio />}
                          label="Multi-city"
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <NativeSelect>
                      <option value="Economy">Economy</option>
                      <option value="Premium Economy">Premium Economy</option>
                      <option value="Business">Business</option>
                      <option value="First-class">First-class</option>
                    </NativeSelect>
                  </FormControl>
                </div>
                <div className={style.yellowBox}>
                  <div>
                    <div
                      className={style.inputGroup}
                      aria-label="Where from?"
                      data-testid="searchbox_origin"
                      style={{ flex: "2 1 0%" }}
                    >
                      <div className={style.svg}>
                        <svg
                          viewBox="0 0 24 24"
                          fill="#BDBDBD"
                          width="20"
                          height="20"
                        ></svg>
                      </div>
                      <div className={style.inputDiv}>
                        <span className={style.span}>
                          <div role="button" tabIndex="0">
                            <div className={style.inputContainer}>
                              <input
                                className={style.SearchboxInput}
                                readOnly=""
                                type="text"
                                placeholder="Where from?"
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className={style.arrow}>
                      <div>
                        <svg
                          viewBox="0 0 24 24"
                          fill="#0071C2"
                          width="32"
                          height="24"
                        ></svg>
                      </div>
                    </div>
                    <div
                      className={style.inputGroup}
                      aria-label="Where to?"
                      data-testid="searchbox_destination"
                    >
                      <div className={style.inputDiv}>
                        <span className={style.span}>
                          <div role="button" tabIndex="0">
                            <div className={style.inputContainer}>
                              <input
                                className={style.SearchboxInput}
                                // readOnly=""
                                type="text"
                                placeholder="Where to?"
                                // value=""
                              />
                            </div>
                          </div>
                        </span>
                      </div>
                    </div>
                    <div className={style.DateInputGroup} aria-label="When?">
                      <div>
                        <div style={{ width: "100%" }}>
                          <span className={style.span}>
                            <div role="button" tabIndex="0">
                              <div className={style.dateInputGroup}>
                                <div className={style.DateInput}>
                                  <div
                                    className={style.dateInputContainer}
                                    data-testid="searchbox_calendar"
                                  >
                                    <div className={style.dateSvg}>
                                      <svg
                                        viewBox="0 0 24 24"
                                        fill="#BDBDBD"
                                        width="20"
                                        height="20"
                                      ></svg>
                                    </div>
                                    <div className={style.datepicker}>
                                      <DatePicker
                                        dateFormat="dd/MM/yyyy"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        disabledKeyboardNavigation
                                        placeholderText="Depart"
                                        className={style.date}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                    <button className={style.search}>
                      <Link
                        className={style.btnLink}
                        to={`/flights/${startDate}`}
                      >
                        Search
                      </Link>
                    </button>
                  </div>
                </div>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Direct flights only"
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPart;
