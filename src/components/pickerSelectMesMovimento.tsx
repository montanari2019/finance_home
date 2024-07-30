import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { THEME } from '~/theme/global';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const dataProps = [
  {
    label: 'Jan - 24',
    value: 'janeiro-2024',
  },
  {
    label: 'Fev - 24',
    value: 'fevereiro-2024',
  },
  {
    label: 'Mar - 24',
    value: 'março-2024',
  },
  {
    label: 'Abr - 24',
    value: 'abril-2024',
  },
  {
    label: 'Mai - 24',
    value: 'maio-2024',
  },
  {
    label: 'Jun - 24',
    value: 'junho-2024',
  },
  {
    label: 'Jul - 24',
    value: 'julho-2024',
  },
  {
    label: 'Ago - 24',
    value: 'agosto-2024',
  },
  {
    label: 'Set - 24',
    value: 'setembro-2024',
  },
  {
    label: 'Out - 24',
    value: 'outubro-2024',
  },
  {
    label: 'Nov - 24',
    value: 'novembro-2024',
  },
  {
    label: 'Dez - 24',
    value: 'dezembro-2024',
  },
];

type headerType =  typeof dataProps[0]
export function PickerSelectMesMovimento() {
    return (
      <SelectDropdown
        data={dataProps}
        defaultValue={dataProps[0]}
        onSelect={(selectedItem: headerType, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem:headerType, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.label) || "Selecione algum item"}
              </Text>
              <Icon
                name={isOpened ? "chevron-up" : "chevron-down"}
                color={THEME.COLORS.GRAY_300}
                style={styles.dropdownButtonArrowStyle}
              />
            </View>
          );
        }}
        renderItem={(item: headerType, index, isSelected) => {
          return (
            <View
              key={index}
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && {
                  backgroundColor: THEME.COLORS.GRAY_600,
                }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.label}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    );
  }
  
  const styles = StyleSheet.create({
    dropdownButtonStyle: {
      width: 120,
      // alignContent: "flex-start",
      gap: 5,
      justifyContent: "flex-end",
      alignItems: "center",
      
      height: 40,
      backgroundColor: THEME.COLORS.WHITE,
      borderRadius: 12,
      flexDirection: "row",
      // paddingHorizontal: 12,
    },
    dropdownButtonTxtStyle: {
 
      fontSize: THEME.SIZES.SIZE_SM,
      fontWeight: "400",
      color: THEME.COLORS.GRAY_500,
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
    },
    dropdownButtonIconStyle: {
      fontSize: 28,
      // marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: THEME.COLORS.GRAY_500,
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: 120,
      flexDirection: "row",
      paddingHorizontal: 12,
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: THEME.SIZES.SIZE_MD,
      fontWeight: "500",
      color: THEME.COLORS.GRAY_100,
    },
    dropdownItemIconStyle: {
      // fontSize: 28,
    },
  });