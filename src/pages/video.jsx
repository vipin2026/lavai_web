import React from 'react';

export default function video() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/images/lavai_video.mp4"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
                {/* <h1 className="text-4xl font-bold mb-4">Welcome to Lavai</h1> */}
                {/* <p className="text-lg">Improving decision-making and increasing conversion rates by over 20%</p> */}
            </div>
        </div>
    );
}
