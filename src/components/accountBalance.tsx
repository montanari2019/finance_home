
import { THEME } from "~/theme/global";
import { Paragraph } from "./paragraph";
import { View } from "react-native";
import { AccountBalanceModel } from "~/model/saldo.model";
import { styled } from "~/styles/Components/accountBalance.styles";
import { formatterReais } from "~/utils/format";

export function AccountBalance({ description, value }:AccountBalanceModel){
    return (
        <View style={styled.sectionSaldo}>
          <Paragraph fontSize={THEME.SIZES.SIZE_XS} text="Saldo" color={THEME.COLORS.GRAY_100} />

          <Paragraph fontSize={THEME.SIZES.SIZE_LG * 1.5} text={formatterReais.format(value)} color={THEME.COLORS.GRAY_100} fontWeight='700' />

          <Paragraph fontSize={THEME.SIZES.SIZE_XS} text={description} color={THEME.COLORS.GRAY_100} />
        </View>
    )
}