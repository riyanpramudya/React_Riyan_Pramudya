import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import ReviewForm from "./reviewForm";


export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReview] = useState([
        { title: "Titanic (1997)", rating: 4, body: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.", key: 1 },
        { title: "E.T. the Extra-Terrestrial (1982)", rating: 4, body: "A troubled child summons the courage to help a friendly alien escape from Earth and return to his home planet.", key: 2 },
        { title: "The Wizard of Oz (1939)", rating: 4, body: "Young Dorothy Gale and her dog Toto are swept away by a tornado from their Kansas farm to the magical Land of Oz, and embark on a quest with three new friends to see the Wizard, who can return her to her home and fulfill the others wishes.", key: 3 },
        { title: "Star Wars: Episode IV - A New Hope (1977)", rating: 4, body: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.", key: 4 },
        { title: "The Lord of the Rings: The Return of the King (2003)", rating: 5, body: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.", key: 5 },
        { title: "Snow White and the Seven Dwarfs (1937)", rating: 4, body: "Exiled into the dangerous forest by her wicked stepmother, a princess is rescued by seven dwarf miners who make her part of their household.", key: 6 },
        { title: "Terminator 2: Judgment Day (1991)", rating: 4, body: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her ten year old son John from an even more advanced and powerful cyborg.", key: 7 },
        { title: "The Lion King (1994)", rating: 4, body: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.", key: 8 },
        { title: "The Godfather (1972)", rating: 5, body: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.", key: 9 },
        { title: "The Jesus Film (1979)", rating: 4, body: "Filmed on location in Israel at authentic biblical sites, this inspirational drama and commercial success retells the life of Christ.", key: 10 },
        { title: "Jurassic Park (1993)", rating: 4, body: "A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.", key: 11 },
        { title: "Indiana Jones and the Raiders of the Lost Ark (1981)", rating: 4, body: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis can obtain its awesome powers.", key: 12 },
        { title: "Harry Potter and the Sorcerer's Stone (2001)", rating: 4, body: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", key: 13 },
        { title: "The Shawshank Redemption (1994)", rating: 5, body: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.", key: 14 },
        { title: "Schindler's List (1993)", rating: 5, body: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.", key: 15 },
        { title: "The Dark Knight (2008)", rating: 5, body: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", key: 16 },
        { title: "Pirates of the Caribbean: The Curse of the Black Pearl (2003)", rating: 4, body: "Blacksmith Will Turner teams up with eccentric pirate 'Captain' Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.", key: 17 },
        { title: "Jaws (1975)", rating: 4, body: "When a killer shark unleashes chaos on a beach community off Cape Cod, it's up to a local sheriff, a marine biologist, and an old seafarer to hunt the beast down.", key: 18 },
        { title: "Fight Club (1999)", rating: 4, body: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.", key: 19 },
        { title: "Pulp Fiction (1994)", rating: 5, body: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", key: 20 },
        { title: "Forrest Gump (1994)", rating: 4, body: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.", key: 21 },
        { title: "Shrek (2001)", rating: 4, body: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.", key: 22 },
        { title: "Transformers (2007)", rating: 3, body: "An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.", key: 23 },
        { title: "Back to the Future (1985)", rating: 4, body: "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.", key: 24 },
        { title: "Citizen Kane (1941)", rating: 4, body: "Following the death of publishing tycoon Charles Foster Kane, reporters scramble to uncover the meaning of his final utterance: 'Rosebud.'", key: 25 },
        { title: "Psycho (1960)", rating: 4, body: "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.", key: 26 },
        { title: "The Sound of Music (1965)", rating: 4, body: "A young novice is sent by her convent in 1930s Austria to become a governess to the seven children of a widowed naval officer.", key: 27 },
        { title: "Ben-Hur (1959)", rating: 4, body: "After a Jewish prince is betrayed and sent into slavery by a Roman friend in 1st-century Jerusalem, he regains his freedom and comes back for revenge.", key: 28 },
        { title: "Gone with the Wind (1939)", rating: 4, body: "A sheltered and manipulative Southern belle and a roguish profiteer face off in a turbulent romance as the society around them crumbles with the end of slavery and is rebuilt during the Civil War and Reconstruction periods.", key: 29 },
        { title: "Saving Private Ryan (1998)", rating: 4, body: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.", key: 30 },
        { title: "City of God (2002)", rating: 4, body: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.", key: 31 },
        { title: "The Matrix (1999)", rating: 4, body: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.", key: 32 },
        { title: "Braveheart (1995)", rating: 4, body: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.", key: 33 },
        { title: "It's a Wonderful Life (1946)", rating: 4, body: "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.", key: 34 },
        { title: "Scarface (1983)", rating: 4, body: "In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.", key: 35 },
        { title: "Seven Samurai (1954)", rating: 4, body: "Farmers from a village exploited by bandits hire a veteran samurai for protection, who gathers six other samurai to join him.", key: 36 },
        { title: "Casablanca (1942)", rating: 4, body: "A cynical expatriate American cafe owner struggles to decide whether or not to help his former lover and her fugitive husband escape the Nazis in French Morocco.", key: 37 },
        { title: "Gladiator (2000)", rating: 4, body: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.", key: 38 },
        { title: "The Avengers (2012)", rating: 4, body: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.", key: 39 },
        { title: "The Ten Commandments (1956)", rating: 4, body: "Moses, raised as a prince of Egypt in the Pharaoh's household, learns of his true heritage as a Hebrew and his divine mission as the deliverer of his people from slavery.", key: 40 },

        
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString()
        setReview((currentReview) => {
            return [review, ...currentReview]
        });
        setModalOpen(false)
    }

    return (
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons
                            name='keyboard-arrow-down'
                            size={28}
                            style={{ ...styles.modalToggle, ...styles.modalClose }}
                            onPress={() => setModalOpen(false)}
                        />
                        <ReviewForm addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons
                name='add-circle-outline'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 0,
        borderColor: '#f2f2f2',
        padding: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1,
    }
})