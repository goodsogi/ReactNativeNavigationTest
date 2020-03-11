import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import {IMAGE} from './constants/Images'

export class CustomHeader extends Component {
    render() {
        let { navigation, isHome, title} = this.props
        return (
            <View style={{ flexDirection: 'row', height: 50 }} >
                {
                    isHome ?

                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image style={{ width: 30, height: 30, marginStart: 10 }} source={IMAGE.ICON_MENU} resizeMode='contain' />
                        </TouchableOpacity>
                        : <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => navigation.goBack()}
                        >
                            <Image style={{ width: 25, height: 25, marginStart: 10 }} source={IMAGE.ICON_BACK} resizeMode='contain' />
                            <Text> Back</Text>
                        </TouchableOpacity>
                }

                <View style={{ flex: 1, height: 50, justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>{title}</Text>

                </View>
                <View style={{ flex: 1, height: 50 }}></View>
            </View>
        )
    }
}