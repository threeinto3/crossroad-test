import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Slider} from '@miblanchard/react-native-slider';

import {colors} from '../../utilities/constants/colors';

type CustomSliderProps = {
  labels: string[];
  onSelectDot: (index: number) => void;
};

const CustomSlider: React.FC<CustomSliderProps> = ({labels, onSelectDot}) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleDotPress = (index: number) => {
    setSelectedIndex(index);
    onSelectDot(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.labelColumn}>
        {labels.map((label, index) => (
          <View
            key={label}
            style={[
              styles.labelContainer,
              {
                borderColor:
                  selectedIndex === index ? colors.green1 : 'transparent',
              },
            ]}>
            <Text
              key={index}
              style={[
                styles.label,
                {
                  color: selectedIndex === index ? colors.white1 : colors.grey4,
                },
              ]}>
              {label}
            </Text>
          </View>
        ))}
      </View>

      <Slider
        value={selectedIndex}
        thumbTintColor={
          selectedIndex === 0 || selectedIndex === labels.length - 1
            ? 'transparent'
            : colors.green1
        }
        trackStyle={{height: 2, width: '100%', alignSelf: 'center'}}
        onValueChange={value => {
          handleDotPress(value.pop());
        }}
        thumbStyle={{
          ...styles.thumbStyles,
          borderColor:
            selectedIndex === 0 || selectedIndex === labels.length - 1
              ? 'transparent'
              : colors.black2,
        }}
        maximumTrackTintColor={colors.grey6}
        minimumTrackTintColor={colors.grey6}
        minimumValue={0}
        startFromZero={false}
        maximumValue={labels.length - 1}
        step={2 / (labels.length - 1)}
      />

      <View style={styles.dotColumn}>
        {labels.map((item, index) => {
          return (
            <View
              key={item}
              style={[
                {
                  backgroundColor:
                    index === selectedIndex ? colors.green1 : colors.grey5,
                },
                styles.dot,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontalHorizontal: scale(16),
    flexDirection: 'column',
  },
  labelColumn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  dotColumn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  labelContainer: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scale(10),
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: scale(2),
    textAlign: 'center',
  },

  dot: {
    height: 18,
    width: 18,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: colors.black2,
    marginTop: -30,
  },
  activeDot: {
    backgroundColor: colors.green1,
  },
  inactiveDot: {
    backgroundColor: colors.grey4,
  },
  thumbStyles: {
    height: 18,
    width: 18,
    borderWidth: 2,
  },
});

export default CustomSlider;
