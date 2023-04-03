import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import Icon from 'react-native-vector-icons/AntDesign';


const DetailScreen = (props) => {
    const detail = props.route.params.item;
    console.log(props.route.params.item.trailer);
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Search" />
            <View style={styles.cardMovie}>
                <Video
                    source={detail.trailer}
                    rate={1.0}
                    volume={10.0}
                    shouldPlay={true}
                    positionMilis={0}
                    resizeMode="contain"
                    paused={false}
                    style={{ width: '100%', height: 300 }}
                />
                <View style={styles.titleSection}>
                    <Text style={styles.titleText}>{detail.title}</Text>
                    <Text style={styles.subTitleText}>{detail.release} | {detail.genre}</Text>
                </View>
                <View style={styles.container2}>
                    <Image source={detail.poster} style={{
                        height: 200,
                        width: "35%",
                        borderRadius: 20,
                    }} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ paddingTop: 10, flexDirection: 'row', marginBottom: 20, justifyContent: 'space-evenly' }}>
                            <View style={{ flexDirection: 'column', marginRight: 15, justifyContent: 'space-around', }}>
                                <Icon name="star" size={30} style={{ color: "#FFc200", }} />
                                <Text>{detail.rating}/10</Text>
                            </View>
                            <TouchableOpacity>
                                <Icon name="staro" size={30} style={{ color: "#ffc200", paddingLeft: 10 }} />
                                <Text>rate this</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.txtSinopsis}>{detail.sinopsis}</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    container2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    cardMovie: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginBottom: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitleText: {
        fontSize: 16,
        color: '#aaa',
    },
    txtSinopsis: {
        fontSize: 12,
        paddingLeft: 10,
        justifyContent: 'space-evenly',
        marginLeft: 5,
        textAlign: 'justify',
    },

})

export default DetailScreen