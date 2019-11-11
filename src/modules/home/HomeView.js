import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';

import { fonts, colors } from '../../styles';
import { Text } from '../../components/StyledText';

export default function HomeScreen() {
  // const rnsUrl = 'https://reactnativestarter.com';
  // const handleClick = () => {
  //   Linking.canOpenURL(rnsUrl).then(supported => {
  //     if (supported) {
  //       Linking.openURL(rnsUrl);
  //     } else {
  //       console.log(`Don't know how to open URI: ${rnsUrl}`);
  //     }
  //   });
  // };
  const listData = [
    {
      id: 1,
      brand: 'Citizen',
      title: 'CITIZEN ECO-DRIVE',
      subtitle: 'Limited Edition',
      price: '$129.99',
      badge: 'NEW',
      badgeColor: '#3cd39f',
      image:
        'https://reactnativestarter.com/demo/images/city-sunny-people-street.jpg',
    },
    {
      id: 2,
      brand: 'Weeknight',
      title: 'NEXT-LEVEL WEAR',
      subtitle: 'Office, prom or special parties is all dressed up',
      price: '$29.99',
      priceFrom: true,
      image: 'https://reactnativestarter.com/demo/images/pexels-photo-26549.jpg',
    }
  ];

  return (
    <View style={styles.section}>
      {listData.map(item => (
        <TouchableOpacity key={item.id}>
          <View style={styles.itemOneContainer}>
            <View style={styles.itemOneImageContainer}>
              <Image style={styles.itemOneImage} source={{ uri: item.image }} />
            </View>
            <View style={styles.itemOneContent}>
              <Text style={styles.itemOneTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text
                style={styles.itemOneSubTitle}
                styleName="collapsible"
                numberOfLines={3}
              >
                {item.subtitle}
              </Text>
              <Text style={styles.itemOnePrice} numberOfLines={1}>
                {item.price}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemOneImage: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 40,
  },
 
  itemTwoSubTitle: {
    color: colors.white,
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    marginVertical: 5,
  },
  itemTwoPrice: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: 20,
  },
  itemTwoImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  itemTwoOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#6271da',
    opacity: 0.5,
  },
  itemThreeContainer: {
    backgroundColor: 'white',
  },
  itemThreeSubContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemThreeImage: {
    height: 100,
    width: 100,
  },
  itemThreeContent: {
    flex: 1,
    paddingLeft: 15,
    justifyContent: 'space-between',
  },
  itemThreeBrand: {
    fontFamily: fonts.primaryRegular,
    fontSize: 14,
    color: '#617ae1',
  },
  itemThreeTitle: {
    fontFamily: fonts.primaryBold,
    fontSize: 16,
    color: '#5F5F5F',
  },
  itemThreeSubtitle: {
    fontFamily: fonts.primaryRegular,
    fontSize: 12,
    color: '#a4a4a4',
  },
  itemThreeMetaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemThreePrice: {
    fontFamily: fonts.primaryRegular,
    fontSize: 15,
    color: '#5f5f5f',
    textAlign: 'right',
  },
  itemThreeHr: {
    flex: 1,
    height: 1,
    backgroundColor: '#e3e3e3',
    marginRight: -15,
  },
  badge: {
    backgroundColor: colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
