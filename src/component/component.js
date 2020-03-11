import Icon from './Icon';
import Container from './Container';
import Button from './Button';
import Heading from './Heading';
import Paragraph from './Paragraph';
import List from './List';

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
};
