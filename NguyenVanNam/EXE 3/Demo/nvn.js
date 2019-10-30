import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

var icon;

export default class nvn extends Component {
    render() {
        return (
            <View style={styles.product}>
                    <View style={{ marginLeft: 50, marginTop: 200}}>
                    <Text style={styles.textStyle}>Xin chào tất cả mọi người, mình là Nam</Text>
                    </View>
                    <View style={{ marginLeft: 80,}}>
                    <Image style={styles.imageStyle}
             source={{uri: 'https://genknews.genkcdn.vn/2018/8/19/2111-15346574419822092708201.jpg'}}>
      </Image>
      </View>
      <View style={{ width: 50, height: 50, marginLeft: 160 }}>
      <TouchableOpacity onPress={() => { Alert.alert('cungdev.com', 'các cậu có thấy mình đẹp trai không');}}>
          <Text style={styles.giamSL}>Bấm vào </Text>
</TouchableOpacity>
        </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    product: {
        justifyContent: 'center',
        //alignItems: 'center',
    },

    soLuongText: {
        fontSize: 30,

    },
    textStyle:{
        fontSize: 30,

    },
    imageStyle:{
        width: 200, height: 200,
        marginBottom:20,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
      },

      giamSL: {
        backgroundColor: 'green',
        textAlign: 'center',
        fontSize:20,
        borderRadius: 10

    }
});
