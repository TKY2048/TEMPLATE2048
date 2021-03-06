import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, Text, View} from 'react-native';
import styled from 'styled-components/native';
import {useStorage} from '../../reducers/storage/useStorage';
import {populatePokemonDB} from './Categories.thunks';
import ItemCard from '../../../src/uikit/ItemCard/ItemCard';
import SplashScreen from 'react-native-splash-screen';
import {createStackNavigator} from '@react-navigation/stack';
import ResourceList from './ResourceList/ResourceList';

const HomeContainer = styled.View`
  background-color: #353535;
`;

const {Navigator, Screen} = createStackNavigator();

const CategoriesScreen = ({navigation}) => {
  const Storage = useStorage();

  const [refreshing, setRefreshing] = useState(true);

  useEffect(() => {
    Storage.dispatch(populatePokemonDB(5, Storage)).then(() => {
      setRefreshing(false);
    });
  }, []);

  return (
    <HomeContainer>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              console.log('refreshing');
            }}
          />
        }>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
            margin: '5%',
          }}>
          Categorías
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignContent: 'center',
          }}>
          <View>
            <ItemCard
              size={150}
              title={'Regiones'}
              imageBackgroundSource={
                'https://static.wikia.nocookie.net/ssb/images/8/81/Kanto.jpg/revision/latest?cb=20071231212224'
              }
              footerColor={'#3770ec'}
              onPress={() => {
                navigation.navigate('ResourceList', {
                  resourceType: 'regions',
                });
              }}
            />
            <ItemCard
              title={'Generaciones'}
              size={150}
              footerColor={'#d60d0d'}
              imageBackgroundSource={
                'https://sm.ign.com/ign_latam/screenshot/default/pokemonanime-1_tx78.jpg'
              }
              onPress={() => {
                navigation.navigate('ResourceList', {
                  resourceType: 'generations',
                });
              }}
            />
            <ItemCard
              title={'Habilidades'}
              size={150}
              footerColor={'#ffd600'}
              imageBackgroundSource={
                'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87643976-7fc1-4f59-98db-0177bf5f32d3/dawt9v6-277b36f8-308a-43b5-b8a2-4d5753c8eda4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3NjQzOTc2LTdmYzEtNGY1OS05OGRiLTAxNzdiZjVmMzJkM1wvZGF3dDl2Ni0yNzdiMzZmOC0zMDhhLTQzYjUtYjhhMi00ZDU3NTNjOGVkYTQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.xkW4HKEgMSr_Nnw84FXfYRJedINQt892FT-3W7HqJ0A'
              }
              onPress={() => {
                navigation.navigate('ResourceList', 'abilities');
              }}
            />
          </View>
          <View>
            <ItemCard
              size={150}
              title={'Tipos'}
              footerColor={'#8a20ff'}
              imageBackgroundSource={
                'https://res.cloudinary.com/lmn/image/upload/c_limit,h_360,w_640/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinnyc/p/o/k/pokemon-types-image-drewlinne-deviant-art-ac4b2.jpg'
              }
              onPress={() => {
                navigation.navigate('ResourceList', {resourceType: 'types'});
              }}
            />
            <ItemCard
              title={'Versiones'}
              size={150}
              footerColor={'#20a212'}
              imageBackgroundSource={
                'https://cdn.shopify.com/s/files/1/1050/5072/products/il_fullxfull.1061776301_frky_large.jpg'
              }
              onPress={() => {
                navigation.navigate('ResourceList', {resourceType: 'version'});
              }}
            />
          </View>
        </View>
      </ScrollView>
    </HomeContainer>
  );
};

function Categories({navigation}) {
  return (
    <Navigator initialRouteName={'CategoriesScreen'} headerMode={'none'}>
      <Screen name={'ResourceList'} component={ResourceList} />
      <Screen
        name={'CategoriesScreen'}
        component={CategoriesScreen}
        navigation={navigation}
      />
    </Navigator>
  );
}

export default Categories;
