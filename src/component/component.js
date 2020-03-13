import Icon from './atom/Icon';
import Container from './atom/Container';
import Button from './atom/Button';
import Heading from './atom/Heading';
import Paragraph from './atom/Paragraph';
import List from './atom/List';
import VideoBlock from './atom/VideoBlock';
// add components you want to register globally.
// Warning: only use this for small components without much logic as registering a component
// globally can create circular dependencies in some cases. For example when you use the store
// in your component
export default {
  Icon,
  Container,
  Button,
  Heading,
  Paragraph,
  List,
  VideoBlock,
};
