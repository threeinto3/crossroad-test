import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  FlatList,
  Pressable,
  Keyboard,
} from 'react-native';
import {colors} from '../../utilities/constants/colors';
import {Wrapper} from '../../commonComponents/Wrapper';
import {Header} from '../../commonComponents/Header';

import ArrowLeft from '../../assets/images/arrow-left.svg';
import TextInputComponent from '../../commonComponents/TextInput';
import IconLocation from '../../assets/images/location.svg';
import CustomSlider from '../../commonComponents/Slider';
import {styles} from './styles';

const AddStop = () => {
  const [filterText, setFilterText] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedArrivalDot, setSelectedArrivalDot] = useState(0);
  const [selectedStayDot, setSelectedStayDot] = useState(0);
  const dotLabels = ['next week', 'in a few weeks', 'in a few days'];
  const stayLabels = ['a few days', 'about a week', 'a few weeks'];
  const inputRef = useRef();
  const locationData = [
    {
      id: '1',
      location: 'Joshua Tree, CA',
      distance: '928 mi',
    },
    {
      id: '2',
      location: 'Joshua Tree National Park',
      distance: '928 mi',
    },
    {
      id: '3',
      location: 'San Jose, CA',
      distance: '928 mi',
    },
  ];

  const renderItem = ({item, index}: any) => {
    const name = item.location.toLowerCase();
    const filterLowerCase = filterText.toLowerCase();
    const startIndex = name.indexOf(filterLowerCase);
    const isMatch = startIndex !== -1;
    if (!isMatch) {
      return;
    }
    if (!filterText) {
      return;
    }
    return (
      <Pressable
        onPress={() => {
          setSelectedLocation(item.location);
          setFilterText(item.location);
          Keyboard.dismiss();
        }}>
        <View
          style={[
            styles.renderContainer,
            {
              borderBottomColor:
                index < locationData.length - 1 ? colors.grey3 : 'transparent',
            },
          ]}>
          <View style={styles.iconContainer}>
            <IconLocation />
          </View>
          <Text style={styles.locationLabel}>
            {isMatch ? (
              <>
                <Text>{item.location.substring(0, startIndex)}</Text>
                <Text style={{color: colors.grey4}}>
                  {item.location.substring(
                    startIndex,
                    startIndex + filterText.length,
                  )}
                </Text>
                <Text>
                  {item.location.substring(startIndex + filterText.length)}
                </Text>
              </>
            ) : (
              item.location
            )}
          </Text>
          <Text style={styles.distanceLabel}>{item.distance}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <Wrapper>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={colors.black2}
      />
      <View style={styles.container}>
        <Header
          title={'Add Stop'}
          titleColor={colors.white1}
          leftIconSource={<ArrowLeft />}
        />
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>
            Where are you heading after Bend, OR?
          </Text>
          <TextInputComponent
            inputRef={inputRef}
            placeholder="Search for a location"
            onChangeText={text => {
              setSelectedLocation('');
              setFilterText(text);
            }}
            value={selectedLocation || filterText}
            renderLeftView={() => {
              if (!selectedLocation) {
                return null;
              }
              return (
                <View style={styles.selectedLocationDot}>
                  <View style={styles.selectedLocationInnerDot} />
                </View>
              );
            }}
            renderRightView={() => {
              if (!selectedLocation) {
                return null;
              }
              return (
                <Pressable
                  style={styles.rightButton}
                  onPress={() => {
                    inputRef?.current?.focus();
                    setSelectedLocation('');
                    setSelectedArrivalDot(null);
                    setSelectedStayDot(null);
                  }}>
                  <Text style={styles.rightLabel}>{'Edit'}</Text>
                </Pressable>
              );
            }}
          />
        </View>

        {selectedLocation ? (
          <>
            <View>
              <Text style={styles.questionLabel}>
                When will you arrive in {selectedLocation}?
              </Text>
              <CustomSlider
                labels={dotLabels}
                onSelectDot={setSelectedArrivalDot}
              />
            </View>
            <View style={styles.dotContainer}>
              <Text style={styles.questionLabel}>How long will you stay?</Text>
              <CustomSlider
                labels={stayLabels}
                onSelectDot={setSelectedStayDot}
              />
            </View>
          </>
        ) : (
          <FlatList
            data={locationData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            keyboardShouldPersistTaps={'handled'}
          />
        )}

        {selectedLocation && (
          <Pressable
            style={styles.button}
            onPress={() => {
              console.log('selected location:', selectedLocation);
              console.log(
                'when will arrive on location:',
                selectedArrivalDot,
                dotLabels[selectedArrivalDot],
              );
              console.log(
                'how long will stay:',
                selectedStayDot,
                stayLabels[selectedStayDot],
              );
            }}>
            <Text style={styles.buttonText}>Add to Route</Text>
          </Pressable>
        )}
      </View>
    </Wrapper>
  );
};

export default AddStop;
