import React, { useEffect,useRef,useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions, FlatList } from 'react-native';
import PagerView from 'react-native-pager-view';
export default function Carousel({ data=[], width="100%",height=0 }: { data: []; width?: number | string;height?: number | string; }){
    if(height==0){
        height=Dimensions.get('window').width*0.8;
    }
    const [currentPage, setCurrentPage] = useState(0);
    const renderIndicator = (index) => {
        return (
          <View key={index.toString()}
            style={[
              styles.indicator,
              currentPage === index && styles.activeIndicator
            ]}
          />
        );
    };
  
    return (
        <View style={{ width:width,height:height}}>
          <PagerView style={styles.viewPager}  initialPage={0} onPageSelected={(event) => setCurrentPage(event.nativeEvent.position)}>
            {data.map((item, index) => (
              <View key={index.toString()} style={styles.imageContainer}>
                <Image
                    source={item.src}
                    style={styles.image}
                    borderBottomRightRadius={25}
                    borderBottomLeftRadius={25}
                    resizeMode="cover"
                    />
              </View>
            ))}
          </PagerView>
          <View style={styles.indicatorContainer}>
             {data.map((_, index) => renderIndicator(index))}
          </View>
        </View>
      );
    }
    

const styles = StyleSheet.create({
    viewPager: {
      flex: 1,
    },
    page: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        resizeMode:'contain',
    },
    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
      },
      indicator: {
        margin: 5,
        width: 10,
        height: 10,
        borderRadius: 5,
        borderColor:"black",
        backgroundColor: 'white',
        borderWidth: 2,
      },
      selectedIndicator: {
        backgroundColor: '#333',
      },
      activeIndicator: {
        borderWidth: 2,
        width:25
      },
  });
