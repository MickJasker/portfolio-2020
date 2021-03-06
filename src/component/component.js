import Icon from './atom/Icon';
import Container from './atom/Container';
import Button from './atom/Button';
import Heading from './atom/Heading';
import Paragraph from './atom/Paragraph';
import List from './atom/List';
import VideoPlayer from './atom/VideoPlayer';
import ImageBlock from './atom/ImageBlock';
import Quote from './atom/Quote';
import Link from './atom/Link';

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
  ImageBlock,
  VideoPlayer,
  Quote,
  Link,
};
