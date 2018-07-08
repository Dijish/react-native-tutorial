import React,{Component} from 'react';
import {View,Image} from 'react-native';
import {inject} from 'mobx-react';

@inject("stores")

default class SplashScreen extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const {stores,navigation}=this.props
        setTimeout(()=>{
            navigation.navigate("Login")
        },store.config.SplashTime)
    }

    render(){
        const {stores}=this.props
        return (
            <View style={{flex:1}}>
                <Image style={{flex:1,width:nul,height:null}} source={stores.config.SplashImg} />
            </View>
        )
    }
}

export {SplashScreen}