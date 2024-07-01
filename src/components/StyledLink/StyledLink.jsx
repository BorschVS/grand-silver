import { Link } from 'react-router-dom';
import styles from './StyledLink.module.scss';
import PropTypes from 'prop-types';

const StyledLink = ({ pathTo, children }) => {
  return (
    <Link className={styles.link} to={pathTo}>
      {children}
    </Link>
  );
};

export default StyledLink;

StyledLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
