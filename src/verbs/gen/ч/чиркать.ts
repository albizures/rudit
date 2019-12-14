import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чиркать: PerfectVerb = {
  name: Word('чиркать', 1),
  singular1stPerson: Word('чиркаю', 1),
  singular2ndPerson: Word('чиркаешь', 1),
  singular3rdPerson: Word('чиркает', 1),
  plural1stPerson: Word('чиркаем', 1),
  plural2ndPerson: Word('чиркаете', 1),
  plural3rdPerson: Word('чиркают', 1),
  masculinePast: Word('чиркал', 1),
  femininePast: Word('чиркала', 1),
  neuterPast: Word('чиркало', 1),
  pluralPast: Word('чиркали', 1),
  imperativeInformal: Word('чиркай', 1),
  imperativeFormal: Word('чиркайте', 1),
  imperfect: [],
};

perfectVerbs.set(чиркать.name.text, чиркать);

export { чиркать };