import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'intersection-observer';

configure({ adapter: new Adapter() });
