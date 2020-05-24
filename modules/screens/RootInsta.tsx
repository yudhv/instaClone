// VENDOR imports
import React from 'react';
import {Text, FlatList, View} from 'react-native';

// imports
import {Post} from '../../components/Post';
import {listUri} from '../constants';

type Item = {
  id: string;
  author: string;
  width: number;
  height: number;
  download_url: string;
  key: string;
};

export const rootView = () => {
  const [list, setList] = React.useState<Item[]>([]);
  const fetchList = async (
    page: number,
    limit: number = 5,
  ): Promise<Item[]> => {
    const returnList: Item[] = [];
    const moddedListUri = `${listUri}?page=${page}&limit=${limit}`;
    const response = await fetch(moddedListUri);
    const data: Item[] = await response.json();
    returnList.push(...data);
    return returnList;
  };
  const setListState = () => {
    const page = Math.floor(Math.random() * 200);
    fetchList(page, 5).then((initialList) =>
      setList([...list, ...initialList]),
    );
  };

  React.useEffect(() => {
    if (list.length === 0) {
      setListState();
    } else {
      console.log(list);
    }
  }, [list]);

  const renderPost = ({item, index}: {item: Item; index: number}) => {
    console.log(index);
    return (
      <Post
        uri={item.download_url}
        width={item.width}
        height={item.height}
        author={item.author}
      />
    );
  };

  return (
    <>
      {list.length > 0 && (
        <FlatList
          onEndReached={setListState}
          onEndReachedThreshold={0.9}
          data={list}
          renderItem={renderPost}
          keyExtractor={(item, index) => item.id}
        />
      )}
    </>
  );
};
