// src/components/CircularProgress.jsx
import React from 'react';

function CircularProgress({ progress }) {
    const radius = 50;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;
    const strokeWidth = 8;
    const size = 120; // 120x120 container

    return (
        <div className="relative" style={{ width: size, height: size }}>
            <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
                {/* Background Ring */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    className="stroke-gray-200"
                />

                {/* Progress Ring */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    strokeWidth={strokeWidth}
                    fill="none"
                    className="stroke-purple-600 transition-all duration-700"
                    style={{
                        strokeDasharray: circumference,
                        strokeDashoffset: offset,
                        strokeLinecap: 'round',
                    }}
                />
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <span className="text-xl font-bold text-purple-600">{Math.round(progress)}%</span>
            </div>
        </div>
    );
}

export default CircularProgress;