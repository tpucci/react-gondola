import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {observer} from 'mobx-react';
import {Header} from '../../../atoms/Header';
import {MovieCard} from '../../../atoms/MovieCard';
import {MoviesModule} from '../../../module/MoviesModule';
import {PlayerModule} from '../../../module/PlayerModule';

const data = [
  {
    title: 'Séries téléchargées',
    dataFilter: movie => movie.downloaded,
  },
];

export const DownloadScreen = observer(() => {
  const headerMovie = MoviesModule.movies.filter(movie => movie.downloaded)[0];
  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: 60}}
        ListHeaderComponent={
          <Header
            onPress={() => PlayerModule.playMovie(headerMovie)}
            title={headerMovie.title}
            subtitle="10 épisodes téléchargés"
            imageUri={headerMovie.imageUri}
          />
        }
        data={data}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          const sectionMovies = MoviesModule.movies.filter(item.dataFilter);
          return (
            <>
              <Text
                style={{
                  fontSize: 12,
                  color: '#FFFFFF',
                  fontWeight: '500',
                  marginLeft: 15,
                }}>
                {item.title}
              </Text>
              <FlatList
                keyExtractor={item => item.imageUri}
                data={sectionMovies}
                style={{marginTop: 10, marginBottom: 5}}
                contentContainerStyle={{
                  paddingHorizontal: 10,
                  paddingBottom: 10,
                }}
                horizontal
                renderItem={({item}) => <MovieCard movie={item} />}
              />
            </>
          );
        }}
      />
    </View>
  );
});
