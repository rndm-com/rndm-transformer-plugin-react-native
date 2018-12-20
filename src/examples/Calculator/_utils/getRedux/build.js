import { _ } from '../constants';

const build = (type, ...keys) => [type, ...keys].join(_);
export default build;
