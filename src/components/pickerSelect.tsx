import { StyleSheet, Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

import { THEME } from '~/theme/global';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const dataProps = [
  {
    label: 'Junho - 2024',
    value: 'junho-2024',
  },
  {
    label: 'Julho - 2024',
    value: 'julho-2024',
  },
  {
    label: 'Agosto - 2024',
    value: 'agosto-2024',
  },
  {
    label: 'Setembro - 2024',
    value: 'setembro-2024',
  },
];

type headerType =  typeof dataProps[0]
export function PickerSelect() {
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
                  backgroundColor: THEME.COLORS.GREEN_500,
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
      width: 200,
      gap: 5,
      alignItems: "center",
      
      height: 32,
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
      marginRight: 8,
    },
    dropdownMenuStyle: {
      backgroundColor: THEME.COLORS.GRAY_500,
      borderRadius: 8,
    },
    dropdownItemStyle: {
      width: "100%",
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
      fontSize: 28,
      marginRight: 8,
    },
  });