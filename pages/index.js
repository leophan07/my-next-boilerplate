// @flow
import * as React from 'react';
import withData from '../libraries/withData';
import DefaultCon from '../containers/Default';

export default withData(props => (
  <DefaultCon {...props}>
    <p>HELLO WORLD! HELLO FROM MARCELO!</p>
  </DefaultCon>
));
