import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недодать: PerfectVerb = {
  name: Word('недодать', 5),
  singular1stPerson: Word('недодам', 5),
  singular2ndPerson: Word('недодашь', 5),
  singular3rdPerson: Word('недодаст', 5),
  plural1stPerson: Word('недодадим', 7),
  plural2ndPerson: Word('недодадите', 7),
  plural3rdPerson: Word('недодадут', 7),
  masculinePast: Word('недодал//недо'дал', 5),
  femininePast: Word('недодала', 7),
  neuterPast: Word('недодало//недо'дало', 5),
  pluralPast: Word('недодали//недо'дали', 5),
  imperativeInformal: Word('недодай', 5),
  imperativeFormal: Word('недодайте', 5),
  imperfect: [],
};

perfectVerbs.set(недодать.name.text, недодать);

export { недодать };