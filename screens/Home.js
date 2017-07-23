import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ScheduleData } from '../assets/Data';

export class Home extends Component {
  // react-navigation specific options
  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: () => <Icon size={24} name="home" color="#252525" />,
  };

  render() {
    let ScheduleList = ScheduleData.map(schedule =>
      <View style={styles.card} key={schedule.scheduleID}>
        <Text style={styles.herotitle}>
          {schedule.scheduleTitle}
        </Text>
        <Text style={styles.subtitle}>
          <Text style={styles.blockInfoTimeDuration}>
            {schedule.scheduleStart} - {schedule.scheduleEnd}
          </Text>
        </Text>
      </View>
    );

    return (
      <View style={styles.screen}>
        <View style={styles.screenTab}>
          <Text style={styles.screenHeading}>HOME</Text>
        </View>
        <ScrollView>
          <View style={styles.infoArea}>
            <Text>JULIUS BAER</Text>
            <Text style={[styles.RaceTitleText, { fontWeight: '700' }]}>
              Mexico City ePrix
            </Text>
            <Text style={styles.RaceVenueText}>
              Autòdromo Hermanos Rodríguez
            </Text>
          </View>
          <View>
            <Image
              source={require('../assets/images/hero-1.jpg')}
              style={styles.photoBoxImage}
            />
          </View>
          <Text style={[styles.sectionHeading, { marginTop: 60 }]}>
            SCHEDULE &bull; Apr 1
          </Text>
          {ScheduleList}
          <Text style={styles.sectionHeading}>MY FAVORITES</Text>
          <View style={[styles.card, { alignItems: 'center', paddingTop: 32 }]}>
            <Icon size={24} name="star" color="#252525" />
            <Text style={styles.secondaryText}>
              Starred activities will appear here!
            </Text>
          </View>
          <Text style={styles.sectionHeading}>ABOUT</Text>
          <View style={[styles.card, { marginBottom: 0 }]}>
            <Text style={styles.secondaryText}>
              Formula E will charge its way through one of the most vibrant
              cities to race at the 2017 FIA Formula E Julius Baer Mexico City
              ePrix.
            </Text>
            <Text style={styles.secondaryText}>
              The passion for racing hangs in the air at Mexico's most famous
              race track. Situated inside the city limits, the Autódromo
              Hermanos Rodríguez is named after the country's most celebrated
              drivers making victory here even more special.
            </Text>
            <Text style={styles.secondaryText}>
              Off track, the eVillage fan zone showcases all day entertainment,
              live music, interactive displays and a dedicated kids area. What’s
              more, we get our fans even closer to the action with special
              appearances from our drivers, including a podium ceremony that is
              open to all!
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#EEF1F5',
    flex: 1,
    // Compensate for the status bar by adding a borderTop
    // borderTopWidth: 24,
    // borderTopColor: '#FFFFFF',
  },
  screenTab: {
    alignItems: 'center',
    backgroundColor: '#75F3BE',
    elevation: 2,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },

  screenHeading: {
    color: '#252525',
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
  },

  sectionHeading: {
    fontSize: 14,
    fontFamily: 'Roboto',
    color: '#757575',
    left: 16,
    paddingTop: 24,
    paddingBottom: 12,
  },

  infoArea: {
    position: 'absolute',
    elevation: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 12,
    paddingLeft: 16,
    marginLeft: 40,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 2,
    top: 225,
  },

  RaceTitleText: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#252525',
  },

  RaceVenueText: {
    color: '#505050',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 4,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
  },

  photoBoxImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 280,
  },

  card: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F7F7F7',
  },

  blockInfoTimeDuration: {
    color: '#757575',
    fontFamily: 'Roboto',
  },

  herotitle: {
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 2,
    color: '#252525',
    fontFamily: 'Roboto',
  },

  subtitle: {
    fontSize: 14,
  },

  secondaryText: {
    lineHeight: 26,
    fontSize: 16,
    marginTop: 1,
    marginBottom: 16,
    fontFamily: 'Roboto',
    color: '#505050',
  },
});
