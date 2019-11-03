// @flow
import * as React from 'react';
import { withRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';

type Props = {
  title?: string,
  router: Object,
  children: React.Element<*>,
};

const Default = (props: Props) => (
  <App>
    <Helmet>
      <title>
        {props.title && props.title !== ''
          ? `${props.title} :: My Next Boilerplate`
          : 'My Next Boilerplate'}
      </title>
    </Helmet>
    {props.children}
  </App>
);

Default.propTypes = {
  title: PropTypes.string,
  router: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

Default.defaultProps = {
  title: '',
};

export default withRouter(Default);
