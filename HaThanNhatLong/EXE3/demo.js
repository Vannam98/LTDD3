import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

var icon;

export default class SanPham extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SL: 0
        }

    }

    tangSLuong() {
        this.setState({
            SL: this.state.SL + 1
        });
    }

    giamSLuong() {
        if (this.state.SL > 0) {
            this.setState({
                SL: this.state.SL - 1
            });
        }


    }


    render() {
        return (
            <View style={styles.product}>
                    <View style={{ marginLeft: 100, marginTop: 250}}>
                        <Text style={styles.soLuongText}> Số lượng: {this.state.SL}</Text>
                    </View>

                    <View style={{ width: 50, height: 50, marginLeft: 50 }}>
                        <TouchableOpacity onPress={() => {this.tangSLuong()}}><Text style={styles.tangSL}>+</Text></TouchableOpacity>
                    </View>

                    <View style={{ width: 50, height: 50, marginLeft: 260, marginTop: -50 }}>
                        <TouchableOpacity onPress={() => {this.giamSLuong()}}><Text style={styles.giamSL}>-</Text></TouchableOpacity>
                    </View>

                    <View style={{ width: 50, height: 50, marginLeft: 160 }}>
                        <TouchableOpacity onPress={() => {alert('Số lượng bạn chọn là :'+this.state.SL);}}>
                            <Text style={styles.gui}>bam vao</Text>
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

    giamSL: {
        backgroundColor: 'green',
        textAlign: 'center',
        fontSize:50,
        borderRadius: 100

    },
    tangSL: {
        backgroundColor: 'pink',
        textAlign: 'center',
        fontSize:50,
        borderRadius: 100
    }
});
