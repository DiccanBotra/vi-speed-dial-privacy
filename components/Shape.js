import React from 'react';
import Svg, { Circle, Rect, Polygon } from 'react-native-svg';

export default function Shape({ type, color, size = 60 }) {
  const half = size / 2;

  switch (type) {
    case 'circle':
      return (
        <Svg width={size} height={size}>
          <Circle cx={half} cy={half} r={half} fill={color} />
        </Svg>
      );

    case 'triangle':
      return (
        <Svg width={size} height={size}>
          <Polygon
            points={`${half},0 ${size},${size} 0,${size}`}
            fill={color}
          />
        </Svg>
      );

    case 'star':
      return (
        <Svg width={size} height={size}>
          <Polygon
            fill={color}
            points="
              30,2 37,22 58,22 40,35
              47,55 30,42 13,55 20,35
              2,22 23,22
            "
          />
        </Svg>
      );

    case 'hexagon':
      return (
        <Svg width={size} height={size}>
          <Polygon
            fill={color}
            points="
              15,0 45,0 60,30
              45,60 15,60 0,30
            "
          />
        </Svg>
      );

    case 'diamond':
      return (
        <Svg width={size} height={size}>
          <Polygon
            fill={color}
            points={`${half},0 ${size},${half} ${half},${size} 0,${half}`}
          />
        </Svg>
      );

    default: // square
      return (
        <Svg width={size} height={size}>
          <Rect width={size} height={size} fill={color} />
        </Svg>
      );
  }
}
