/**
 * Carnation Assignment
 * Filename: HomePage styles.js
 * created on 13th May 2020
 *
 * Purpose: To manage styles for the Home Page.
 */

/**
 * React Imports
 */
import {StyleSheet} from 'react-native';

/**
 *  A styles object for homepage
 */
const HomeStyles = StyleSheet.create({
  containerViewStyle: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textTitleStyle: {
    fontSize: 20,
    margin: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    margin: 20,
    borderColor: 'black',
    borderWidth: 1,
  },
  horsesTextStyle: {
    margin: 20,
  },
  resultTextStyle: {
    marginHorizontal: 20,
  },
});

export default HomeStyles;
