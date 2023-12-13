import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import * as turf from '@turf/turf';

const App = () => {
  useEffect(() => {
    // Example coordinates for two points
    const point1 = turf.point([-73.9857, 40.7484]);
    const point2 = turf.point([-74.006, 40.7128]);

    // Calculate distance between points
    const distance = turf.distance(point1, point2);

    console.log('Distance between points:', distance);
  }, []);

  return (
    <View>
      <Text>Hello, Turf.js!</Text>
    </View>
  );
};

export default App;

