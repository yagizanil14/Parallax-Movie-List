import React,{useState} from 'react';
import {
  SafeAreaView,
  Animated,
  Easing,
  Dimensions
} from 'react-native';
import movieGenresList from '../../movieGenresList.json'
import {MovieCard} from '../component'

const App = () => {
  const [scrollY] = useState(new Animated.Value(0));
  const translateY = scrollY.interpolate({
    inputRange: [0, Dimensions.get("window").height * (movieGenresList.length /2)],
    outputRange: [0, Dimensions.get("window").height * 0.5],
    extrapolate: 'clamp',
    easing: Easing.linear
});
  const flatListItem = item => <MovieCard cardItem={item} pTranslateY={translateY} />
  return (
    <SafeAreaView>
      <Animated.FlatList
      keyExtractor={(_,index)=>index.toString()}
      data={movieGenresList}
      renderItem={flatListItem}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }],{useNativeDriver: false})} />
    </SafeAreaView>
  );
};

 export {App};
