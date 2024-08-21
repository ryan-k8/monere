import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Cpu(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, [props.cpuData.cpuModel]);

  if (isLoading) {
    return null;
  }
  return (
    <div className="cpu_main">
      <div className="cpu_wrapper">
        <div className="cpu_wrapper_main">
          <div className="cpu_circle">
            <CircularProgressbarWithChildren
              value={props.cpuData.cpuLoad}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#ffffffba",
                textColor: "#fff",
                pathColor: "#e84c57",
                trailColor: "#61616133",
              })}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ width: 100, marginTop: -5 }}
                alt="cpu"
                fill="currentColor"
                className="cpu_icon"
              >
                <path d="M160 352h192V160H160V352zM448 176h48C504.8 176 512 168.8 512 160s-7.162-16-16-16H448V128c0-35.35-28.65-64-64-64h-16V16C368 7.164 360.8 0 352 0c-8.836 0-16 7.164-16 16V64h-64V16C272 7.164 264.8 0 256 0C247.2 0 240 7.164 240 16V64h-64V16C176 7.164 168.8 0 160 0C151.2 0 144 7.164 144 16V64H128C92.65 64 64 92.65 64 128v16H16C7.164 144 0 151.2 0 160s7.164 16 16 16H64v64H16C7.164 240 0 247.2 0 256s7.164 16 16 16H64v64H16C7.164 336 0 343.2 0 352s7.164 16 16 16H64V384c0 35.35 28.65 64 64 64h16v48C144 504.8 151.2 512 160 512c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448h64v48c0 8.836 7.164 16 16 16c8.838 0 16-7.164 16-16V448H384c35.35 0 64-28.65 64-64v-16h48c8.838 0 16-7.164 16-16s-7.162-16-16-16H448v-64h48C504.8 272 512 264.8 512 256s-7.162-16-16-16H448V176zM384 368c0 8.836-7.162 16-16 16h-224C135.2 384 128 376.8 128 368v-224C128 135.2 135.2 128 144 128h224C376.8 128 384 135.2 384 144V368z" />
              </svg>
            </CircularProgressbarWithChildren>
          </div>
          <div className="cpu_data">
            <div className="cpu_data_perc">
              <span className="cpu_data_num">{props.cpuData.cpuLoad}</span>
              <span className="cpu_data_num_per">%</span>
            </div>
            <div className="cpu_data_info">
              <div className="cpu_data_cpus">
                <span className="cpu_data_label">CPUs</span>
                <span className="cpu_data_data"> {props.cpuData.numCpus}</span>
              </div>
              <div className="cpu_data_cpus">
                <span className="cpu_data_label">CPU Speed</span>
                <span className="cpu_data_data"> {props.cpuData.cpuSpeed}</span>
              </div>
            </div>
          </div>
        </div>
        <span className="cpu_data_model"> {props.cpuData.cpuModel}</span>
      </div>
    </div>
  );
}
