/**
 * Carnation Assignment
 * Filename: HomePage index.js
 * created on 12th May 2020
 *
 * Purpose: Display's home page i.e landing page of the App.
 */

/**
 * React Imports
 */
import React, {Component} from 'react';
import {SafeAreaView, Button, Text, ScrollView} from 'react-native';

/**
 * Importing colors and styles required for Home Page
 */
import HomeStyles from './styles';
import {colorCodes, NO_OF_HORSES} from './constants';

/**
 * Display's home page i.e landing page of the App.
 *
 * @class Home
 * @extends {Component}
 */
class Home extends Component {
  /**
   * Constructor Life cycle method
   * @param {*} props
   */
  constructor(props) {
    super(props);

    //Initial state variables
    this.state = {
      currentHorses: [],
      result: '',
      finalResult: '',
    };
  }

  /**
   * This arrow function performs logic for generating
   * unique random 25 horses in range from 1 to 100
   */
  generateRandom25Horses = () => {
    let totalHorses = [];
    while (totalHorses.length < NO_OF_HORSES) {
      // Here random values will be generated under Max range i.e 100
      let horse = Math.floor(Math.random() * 100) + 1;
      if (totalHorses.indexOf(horse) === -1) {
        totalHorses.push(horse);
      }

      if (totalHorses.length === NO_OF_HORSES) {
        console.log('Total Horses:', totalHorses);
        this.setState({
          currentHorses: totalHorses,
          result: '',
          finalResult: '',
        });
      }
    }
  };

  /**
   * This function performs logic for
   * obtaining fastest 3 horses and total minimum
   * races required
   */
  getFastestHorsesAndTotalRaces = () => {
    let totalHorses = this.state.currentHorses;
    if (totalHorses.length === 25) {
      let resultStr = '';
      let race1 = [
        totalHorses[0],
        totalHorses[1],
        totalHorses[2],
        totalHorses[3],
        totalHorses[4],
      ];
      console.log('Race 1 conducted amongst horses with numbers::', race1);
      resultStr =
        resultStr +
        'Race 1 conducted amongst horses with numbers::\n' +
        race1.join(', ') +
        '\n';
      race1.sort((a, b) => b - a);
      console.log('Race 1 winning order of horses with numbers::', race1);
      resultStr =
        resultStr +
        'Race 1 winning order of horses with numbers::\n' +
        race1.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      let race2 = [
        totalHorses[5],
        totalHorses[6],
        totalHorses[7],
        totalHorses[8],
        totalHorses[9],
      ];
      console.log('Race 2 conducted amongst horses with numbers::', race2);
      resultStr =
        resultStr +
        'Race 2 conducted amongst horses with numbers::\n' +
        race2.join(', ') +
        '\n';
      race2.sort((a, b) => b - a);
      console.log('Race 2 winning order of horses with numbers::', race2);
      resultStr =
        resultStr +
        'Race 2 winning order of horses with numbers::\n' +
        race2.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      let race3 = [
        totalHorses[10],
        totalHorses[11],
        totalHorses[12],
        totalHorses[13],
        totalHorses[14],
      ];
      console.log('Race 3 conducted amongst horses with numbers::', race3);
      resultStr =
        resultStr +
        'Race 3 conducted amongst horses with numbers::\n' +
        race3.join(', ') +
        '\n';
      race3.sort((a, b) => b - a);
      console.log('Race 3 winning order of horses with numbers::', race3);
      resultStr =
        resultStr +
        'Race 3 winning order of horses with numbers::\n' +
        race3.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      let race4 = [
        totalHorses[15],
        totalHorses[16],
        totalHorses[17],
        totalHorses[18],
        totalHorses[19],
      ];
      console.log('Race 4 conducted amongst horses with numbers::', race4);
      resultStr =
        resultStr +
        'Race 4 conducted amongst horses with numbers::\n' +
        race4.join(', ') +
        '\n';
      race4.sort((a, b) => b - a);
      console.log('Race 4 winning order of horses with numbers::', race4);
      resultStr =
        resultStr +
        'Race 4 winning order of horses with numbers::\n' +
        race4.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      let race5 = [
        totalHorses[20],
        totalHorses[21],
        totalHorses[22],
        totalHorses[23],
        totalHorses[24],
      ];
      console.log('Race 5 conducted amongst horses with numbers::', race5);
      resultStr =
        resultStr +
        'Race 5 conducted amongst horses with numbers::\n' +
        race5.join(', ') +
        '\n';
      race5.sort((a, b) => b - a);
      console.log('Race 5 winning order of horses with numbers::', race5);
      resultStr =
        resultStr +
        'Race 5 winning order of horses with numbers::\n' +
        race5.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      let race6 = [race1[0], race2[0], race3[0], race4[0], race5[0]];
      console.log(
        'Race 6 conducted amongst the winning horses amongst their batch with numbers::',
        race6,
      );
      resultStr =
        resultStr +
        'Race 6 conducted amongst the winning horses of their belonging batch with numbers::\n' +
        race6.join(', ') +
        '\n';
      race6.sort((a, b) => b - a);
      console.log('Race 6 winning order of horses with numbers::', race6);
      resultStr =
        resultStr +
        'Race 6 winning order of horses with numbers::\n' +
        race6.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      let fastest3Horses = [];
      fastest3Horses.push(race6[0]);

      resultStr =
        resultStr +
        'After Race 6 it is confirmed that the 1st Fastest horse with its number is ::\n' +
        fastest3Horses.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      let race6FirstWinner = race6[0];
      let race6SecondWinner = race6[1];
      let race6ThirdWinner = race6[2];

      //construct an array to counduct a final race for obtaining 2nd and 3rd fastest horses
      let race7 = [];

      race7.push(race6ThirdWinner);
      // Obtain other 2 horses from the corresponding batch of first winner from sixth race
      if (this.checkIfValueExistInArray(race1, race6FirstWinner) === true) {
        race7.push(race1[1]);
        race7.push(race1[2]);
      } else if (
        this.checkIfValueExistInArray(race2, race6FirstWinner) === true
      ) {
        race7.push(race2[1]);
        race7.push(race2[2]);
      } else if (
        this.checkIfValueExistInArray(race3, race6FirstWinner) === true
      ) {
        race7.push(race3[1]);
        race7.push(race3[2]);
      } else if (
        this.checkIfValueExistInArray(race4, race6FirstWinner) === true
      ) {
        race7.push(race4[1]);
        race7.push(race4[2]);
      } else if (
        this.checkIfValueExistInArray(race5, race6FirstWinner) === true
      ) {
        race7.push(race5[1]);
        race7.push(race5[2]);
      }

      // Obtain other 2 horses from the corresponding batch of second winner from sixth race
      if (this.checkIfValueExistInArray(race1, race6SecondWinner) === true) {
        race7.push(race1[0]);
        race7.push(race1[1]);
      } else if (
        this.checkIfValueExistInArray(race2, race6SecondWinner) === true
      ) {
        race7.push(race2[0]);
        race7.push(race2[1]);
      } else if (
        this.checkIfValueExistInArray(race3, race6SecondWinner) === true
      ) {
        race7.push(race3[0]);
        race7.push(race3[1]);
      } else if (
        this.checkIfValueExistInArray(race4, race6SecondWinner) === true
      ) {
        race7.push(race4[0]);
        race7.push(race4[1]);
      } else if (
        this.checkIfValueExistInArray(race5, race6SecondWinner) === true
      ) {
        race7.push(race5[0]);
        race7.push(race5[1]);
      }

      console.log(
        'Race 7 conducted amongst the remaining horses for obtaining 2nd and 3rd fastest horse with numbers::',
        race7,
      );
      resultStr =
        resultStr +
        'Race 7 conducted amongst the remaining horses for obtaining 2nd and 3rd fastest horse with numbers::\n' +
        race7.join(', ') +
        '\n';
      race7.sort((a, b) => b - a);
      console.log('Race 7 winning order of horses with numbers::', race7);
      resultStr =
        resultStr +
        'Race 7 winning order of horses with numbers::\n' +
        race7.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      fastest3Horses.push(race7[0]);
      fastest3Horses.push(race7[1]);

      console.log(
        'Fastest 3 winning order of horses with numbers::',
        fastest3Horses,
      );
      resultStr =
        resultStr +
        'Hence, Fastest 3 winning order of horses with numbers::\n' +
        fastest3Horses.join(', ') +
        '\n';
      resultStr = resultStr + '----' + '\n';

      resultStr =
        resultStr +
        'Hence, Total - 7 number of races are required to obtain fastest 3 horses\n';
      resultStr = resultStr + '----' + '\n';

      let finalResultStr = '';
      finalResultStr =
        finalResultStr +
        '===== RESULT ===== \n Total - 7 number of races are required to obtain fastest 3 horses\n' +
        'Fastest 3 winning order of horses with numbers::\n' +
        fastest3Horses.join(', ') +
        '\n';
      finalResultStr = finalResultStr + '===== RESULT =====' + '\n';

      this.setState({result: resultStr, finalResult: finalResultStr});
    }
  };

  /**
   * This function checks if a particular value exist in an array or not
   *
   * @memberof Home
   */
  checkIfValueExistInArray = (array, value) => {
    if (array.indexOf(value) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Renders UI - Lifecycle method
   *
   * @memberof Home
   */
  render() {
    return (
      <SafeAreaView style={HomeStyles.containerViewStyle}>
        <Text style={HomeStyles.textTitleStyle}>
          Number of races required for obtaining the fastest 3 Horses
        </Text>
        <Button
          title="Click here to - 'Generate 25 Horses'"
          style={HomeStyles.buttonStyle}
          color={colorCodes.red}
          onPress={this.generateRandom25Horses}
        />
        <Text style={HomeStyles.horsesTextStyle}>
          {this.state.currentHorses.join(', ')}
        </Text>
        <Button
          title="Click here to - 'Perform Logic for obtaining fastest 3 horses and total number of races required'"
          style={HomeStyles.buttonStyle}
          color={colorCodes.green}
          onPress={this.getFastestHorsesAndTotalRaces}
        />
        <ScrollView>
          <Text style={HomeStyles.resultTextStyle}>
            {this.state.finalResult}
          </Text>
          <Text style={HomeStyles.resultTextStyle}>{this.state.result}</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  /**
   * Called when component is mounted successfully - life cycle method
   */
  componentDidMount() {}
}

export default Home;
