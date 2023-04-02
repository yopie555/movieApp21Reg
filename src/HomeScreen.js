import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import poster1 from '../assets/poster1.png'
import poster2 from '../assets/poster2.png'
import poster3 from '../assets/poster3.png'
import poster4 from '../assets/poster4.png'
import poster5 from '../assets/poster5.png'
import { useNavigation } from '@react-navigation/native'

const Homepage = () => {

    const dataMovie = [
        {
            id: 1,
            title: 'Yowamushi Pedal',
            rating: 8.5,
            genre: 'Anime',
            poster: poster1,
            sinopsis: 'Anime Yowamishi Pedal menceritakan tentang perjalanan tim olahraga balap sepeda, Mereka memiliki bakat yang sangat luar biasa. Persaingan menjadi bagian dari cerita, Kekalahan yang sangat mengerikan dan motivasi yang tumbuh dengan sangat cepat.',
            trailer: 'https://www.youtube.com/watch?v=3SkUP7wXP8Y'
        },
        {
            id: 2,
            title: 'Jujutsu No Kaisen',
            rating: 8.5,
            genre: 'Anime',
            poster: poster2,
            sinopsis: 'Jujutsu Kaisen bercerita tentang seorang siswa SMA bernama Yuji Itadori yang bergabung dengan organisasi rahasia bernama Jujutsu Sorcerers. Yuji bergabung ke dalam organisasi itu untuk membunuh kutukan kejam bernama Ryomen Sukuna yang ada di tubuhnya.',
            trailer: 'https://www.youtube.com/watch?v=f7R6NA4Yo00'
        },
        {
            id: 3,
            title: 'One Piece',
            rating: 8.5,
            genre: 'Anime',
            poster: poster3,
            sinopsis: 'One Piece menceritakan perjalanan Luffy, seorang anak laki-laki yang bertemu bajak laut hebat bernama Shanks, dimana Luffy terinspirasi oleh kehebatan Shanks dan bermimpi suatu hari nanti ingin menjadi bajak laut. Kemudian Shanks menjanjikan Luffy untuk reuni di masa depan dan memberikan topi jeraminya.',
            trailer: 'https://www.youtube.com/watch?v=LHTYpWI3S6Q'
        },
        {
            id: 4,
            title: 'Prince of Tennis',
            rating: 8.5,
            genre: 'Anime',
            poster: poster4,
            sinopsis: 'Anime Prince of Tennis ini bercerita tentang seorang anak lelaki kelas 1 SMP yang memiliki bakat luar biasa dalam tenis. Ia adalah Ryoma Echizen (baca: Echizen Ryoma). Dari episode-episode awal, kita akan disuguhi kehebatan-kehebatan si Ryoma ini. Ya, mirip dengan Tsabasa.',
            trailer: 'https://www.youtube.com/watch?v=cQkLe1UgDbU'
        },
        {
            id: 5,
            title: 'Spy X Family',
            rating: 8.5,
            genre: 'Anime',
            poster: poster5,
            sinopsis: 'Spy x Family mengisahkan tentang agen mata-mata terampil bernama sandi "Twilight" yang menjalankan Operasi Strix, yakni misi penting terkait perdamaian antarnegara mencakup Westalis di barat dan Ostania di timur.',
            trailer: 'https://www.youtube.com/watch?v=CCXLUQzuigw'
        },
    ]

    const navigation = useNavigation()


    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Search" />
            <View style={styles.container2}>
                <Text style={styles.text}>Best Genre</Text>
                <Text style={styles.text2}>Best Movie {">>"}</Text>
            </View>
            <View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginVertical: 10 }}>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Action</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Romance</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Thriller</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Horror</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Anime</Text>
                    </View>
                    <View style={styles.container3}>
                        <Text style={styles.text3}>Korean</Text>
                    </View>
                </ScrollView>
            </View>
            <Text style={styles.text}>Hot Anime Series</Text>
            {/* <ScrollView style={styles.container4}>
                <View style={styles.container5}>
                    <Image source={poster1} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Image source={poster2} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Image source={poster3} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Image source={poster4} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
                <View style={styles.container5}>
                    <Image source={poster5} style={styles.image} />
                    <Text style={styles.sinopsis}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                    <View style={styles.container6}>
                        <Text style={styles.text4}>Rating: 8.5</Text>
                        <Text style={styles.text4}>Genre: Action</Text>
                    </View>
                </View>
            </ScrollView> */}
            <ScrollView>
                {
                    dataMovie.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={styles.container5}
                                key={index}
                                onPress={() => navigation.navigate('DetailScreen', { item: item })}
                            >
                                <Image source={item.poster} style={styles.image} />
                                <Text style={styles.sinopsis}>{item.sinopsis}</Text>
                                <View style={styles.container6}>
                                    <Text style={styles.text4}>Rating: {item.rating}</Text>
                                    <Text style={styles.text4}>Genre: {item.genre}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
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
        marginHorizontal: 20,
        marginTop: 10,
    },
    container3: {
        backgroundColor: '#fff',
        width: 150,
        height: 30,
        borderRadius: 10,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    container4: {
        marginTop: 10,
    },
    container5: {
        backgroundColor: '#fff',
        width: '96%',
        height: 'auto',
        borderRadius: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },
    container6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginHorizontal: 10,
        borderTopWidth: 1,
        borderTopColor: 'lightgray',
    },
    image: {
        width: '90%',
        height: 180,
        borderRadius: 10,
    },
    input: {
        backgroundColor: '#fff',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
    text: {
        color: 'white',
        fontSize: 25,
    },
    text2: {
        color: 'white',
        fontSize: 20,
    },
    text3: {
        fontSize: 20,
        marginHorizontal: 20,
    },
    sinopsis: {
        fontSize: 15,
        marginHorizontal: 20,
        textAlign: 'justify',
        marginTop: 5,
    }
})

export default Homepage