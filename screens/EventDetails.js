import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  ScrollView,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export class EventDetails extends Component {
  static navigationOptions = {
    gesturesEnabled: true,
  };

  render() {
    const {
      eventDescription,
      eventDuration,
      eventTime,
      eventTitle,
      eventVenueMain,
      eventVenueSecondary,
    } = this.props.navigation.state.params;

    return (
      <View style={styles.screen}>
        <ScrollView
          style={styles.scrollStyle}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.photoBox}>
            <View style={styles.screenTab}>
              <TouchableNativeFeedback
                onPress={() => this.props.navigation.goBack()}
                background={TouchableNativeFeedback.Ripple(
                  'rgba(0, 0, 0, 0.24)',
                  true
                )}
              >
                <View style={[styles.iconBase, styles.leftIconBoundOffset]}>
                  <Icon size={24} name="arrow-back" color="#FFFFFF" />
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple(
                  'rgba(0, 0, 0, 0.24)',
                  true
                )}
              >
                <View style={[styles.iconBase, styles.secondrightIconBound]}>
                  <Icon size={24} name="map" color="#FFFFFF" />
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                onPress={() =>
                  Share.share({ message: '', title: '' }, { dialogTitle: '' })}
                background={TouchableNativeFeedback.Ripple(
                  'rgba(0, 0, 0, 0.24)',
                  true
                )}
              >
                <View style={[styles.iconBase, styles.rightIconBound]}>
                  <Icon size={24} name="share" color="#FFFFFF" />
                </View>
              </TouchableNativeFeedback>
              <Text style={styles.screenHeading} />
            </View>
            <View style={styles.eventNameHeroView}>
              <Text style={styles.eventNameHero}>
                {eventTitle}
              </Text>
            </View>
          </View>
          <View style={styles.infoCard}>
            <View style={styles.infoCardChunk}>
              <Icon name="schedule" size={24} color="#BDBDBD" />
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Text style={styles.infoCardChunkMainText}>
                    {eventTime}
                  </Text>
                </View>
                <View>
                  <Text style={styles.infoCardChunkSecondaryText}>
                    {eventDuration} minutes
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoCardChunk}>
              <Icon name="place" size={24} color="#BDBDBD" />
              <View style={{ flexDirection: 'column' }}>
                <View>
                  <Text style={styles.infoCardChunkMainText}>
                    {eventVenueMain}
                  </Text>
                </View>
                <View>
                  <Text style={styles.infoCardChunkSecondaryText}>
                    {eventVenueSecondary}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.infoCardChunk}>
              <Icon name="info-outline" size={24} color="#BDBDBD" />
              <Text style={styles.infoCardChunkMainText}>
                {eventDescription}
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    // Compensate for the status bar by adding a borderTop
    // borderTopWidth: 24,
    // borderTopColor: '#202D3D',
  },

  screenTab: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    elevation: 0,
    flexDirection: 'row',
    height: 56,
    justifyContent: 'center',
  },

  iconBase: {
    alignItems: 'center',
    height: 56,
    justifyContent: 'center',
    position: 'absolute',
    width: 56,
  },

  leftIconBoundOffset: {
    left: 12,
    top: 12,
  },

  rightIconBound: {
    right: 0,
    top: 12,
  },

  secondrightIconBound: {
    right: 52,
    top: 12,
  },

  photoBox: {
    backgroundColor: '#1D2D3D',
    height: 320,
    minHeight: 280,
    justifyContent: 'space-between',
  },

  eventNameHeroView: {
    left: 68,
    bottom: 24,
  },

  eventNameHero: {
    color: '#FFFFFF',
    fontSize: 24,
  },

  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
    paddingTop: 12,
  },

  infoCardChunk: {
    flexDirection: 'row',
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
    paddingLeft: 28,
    borderTopColor: '#F7F7F7',
    borderTopWidth: 0,
  },

  infoCardChunkMainText: {
    color: '#343434',
    fontSize: 16,
    paddingRight: 32,
    paddingLeft: 16,
  },

  infoCardChunkSecondaryText: {
    color: '#727272',
    fontSize: 13,
    paddingRight: 32,
    paddingLeft: 16,
  },
});
