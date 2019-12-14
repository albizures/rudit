import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похолодать: PerfectVerb = {
  name: Word('похолодать', 7),
  singular1stPerson: Word('похолодаю', 7),
  singular2ndPerson: Word('похолодаешь', 7),
  singular3rdPerson: Word('похолодает', 7),
  plural1stPerson: Word('похолодаем', 7),
  plural2ndPerson: Word('похолодаете', 7),
  plural3rdPerson: Word('похолодают', 7),
  masculinePast: Word('похолодал', 7),
  femininePast: Word('похолодала', 7),
  neuterPast: Word('похолодало', 7),
  pluralPast: Word('похолодали', 7),
  imperativeInformal: Word('похолодай', 7),
  imperativeFormal: Word('похолодайте', 7),
  imperfect: [],
};

perfectVerbs.set(похолодать.name.text, похолодать);

export { похолодать };