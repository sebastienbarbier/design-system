import React from 'react';
import { invertColor } from '../utils/invertColor';

/**
 * Display a list of colored tiles with their names and hex values.
 * @param {Object} obj - Object with key-value pairs of color names and hex values. 
 * @param {Function} filter - Filter function to apply on key list 
 * @param {Boolean} large - Display large tiles (default: false)
 * @returns {JSX.Element}
 */
export default function Palette(props) {
    // Ref is {key, values} structure. Filter a function.
    const { obj, filter, large } = props;
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignContent: 'stretch',
      maxWidth: '100%',
      paddingBottom: '20px',
    }}>
      { Object.keys(obj).filter(filter).map(key => {
        return <div style={{
          background: obj[key],
          padding: '4px',
          margin: '2px',
          borderRadius: '4px',
          border: '1px solid #000',
          width: large ? '200px' : '100px',
          textAlign: 'center',
        }}>
          <p style={{
            color: invertColor(obj[key], true),
            margin: 0,
          }}><strong>{key}</strong><br/><em>{obj[key]}</em></p></div>
      })}
    </div>
  }