import * as React from "react";
import Buttom from "./Button";
import { View, Text } from "react-native";
import Styles from "../styles/GlobalStyles";
import { myColors } from "../styles/colors";

const MyKeyboard = () => {

    const [firstNumber, setFirstNumber] = React.useState("");
    const [secondNumber, setSecondNumber] = React.useState("");
    const [operation, setOperation] = React.useState("");
    const [result, setResult] = React.useState< Number | null >(null);
    
    const handleNumberPress = (buttomValue: string) => {
        if (firstNumber.length < 10) {
            setFirstNumber(firstNumber + buttomValue)
        }
    };
    
    const handleOperationPress = (buttomValue: string) => {
        setOperation(buttomValue);
        setSecondNumber(firstNumber);
        setFirstNumber("");
    };

    const clear = () => {
       setFirstNumber("");
       setSecondNumber("");
       setOperation("");
       setResult(null);
    };

    const getResult = () => {
        switch (operation) {
            case "+":
                clear();
                setResult(parseInt(secondNumber) + parseInt(firstNumber));
                break;
            case "-":
                clear();
                setResult(parseInt(secondNumber) - parseInt(firstNumber));
                break;
            case "*":
                clear();
                setResult(parseInt(secondNumber) * parseInt(firstNumber));
                break;
            case "/":
                clear();
                setResult(parseInt(secondNumber) / parseInt(firstNumber));
                break;
            default:
                clear();
                setResult(0);
                break;
        }
     };

     const firstNumberDisplay = () => {
        if (result !== null) {
            return (
            <Text 
                style={
                    result < 99999
                        ? [Styles.screenFirtsNumber, {color: myColors.result}] 
                        : [Styles.screenFirtsNumber, {fontSize: 50, color: myColors.result}]
                }
            > 
                {result?.toString()} 
            </Text>);
        }

        if (firstNumber && firstNumber.length < 6) {
            return(
            <Text style={Styles.screenFirtsNumber}>
                {firstNumber}
            </Text>);
        }

        if (firstNumber === "") {
            return(
            <Text style={Styles.screenFirtsNumber}>
                {"0"}
            </Text>);
        }
        if (firstNumber.length > 5 && firstNumber.length < 8) {
            return(
            <Text style={[Styles.screenFirtsNumber, { fontSize: 70 }]}>
                {firstNumber}
            </Text>);
        }
        if (firstNumber.length > 7) {
            return(
            <Text style={[Styles.screenFirtsNumber, { fontSize: 50 }]}>
                {firstNumber}
            </Text>);
        }      
    };

    return (
        <View style={Styles.viewBottom}>
            <View
                style={{
                    height: 120,
                    width: "90%",
                    justifyContent: "flex-end",
                    alignSelf: "center",
                }}
            >
                <Text style={Styles.screenSecondNumber}>
                    {secondNumber}
                    <Text style={{color: "purple", fontSize: 50, fontWeight: '500'}}>{operation}</Text>
                </Text>
                {firstNumberDisplay()}
            </View>
            <View style={Styles.row}>
                <Buttom title="C" isGray onPress={clear} />
                <Buttom title="+/-" isGray onPress={() => handleOperationPress("+/-")} />
                <Buttom title="%" isGray onPress={() => handleOperationPress("%")} />
                <Buttom title="÷" isBlue onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Buttom title="7"  onPress={() => handleNumberPress("7")} />
                <Buttom title="8"  onPress={() => handleNumberPress("8")} />
                <Buttom title="9"  onPress={() => handleNumberPress("9")} />
                <Buttom title="x" isBlue onPress={() => handleOperationPress("*")} />
            </View>
            <View style={Styles.row}>
                <Buttom title="4"  onPress={() => handleNumberPress("4")} />
                <Buttom title="5"  onPress={() => handleNumberPress("5")} />
                <Buttom title="6"  onPress={() => handleNumberPress("6")} />
                <Buttom title="-" isBlue onPress={() => handleOperationPress("-")} />
            </View>
            <View style={Styles.row}>
                <Buttom title="1"  onPress={() => handleNumberPress("1")} />
                <Buttom title="2"  onPress={() => handleNumberPress("2")} />
                <Buttom title="3"  onPress={() => handleNumberPress("3")} />
                <Buttom title="+" isBlue onPress={() => handleOperationPress("+")} />
            </View>
            <View style={Styles.row}>
                <Buttom title="."  onPress={() => handleNumberPress(".")} />
                <Buttom title="0"  onPress={() => handleNumberPress("0")} />
                <Buttom title="<="  onPress={() => setFirstNumber(firstNumber.slice(0, -1))} />
                <Buttom title="=" isBlue onPress={() => getResult()} />
            </View>
        </View>
    )
}

export default MyKeyboard
