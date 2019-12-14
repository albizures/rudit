import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заспиртовать: PerfectVerb = {
  name: Word('заспиртовать', 9),
  singular1stPerson: Word('заспиртую', 7),
  singular2ndPerson: Word('заспиртуешь', 7),
  singular3rdPerson: Word('заспиртует', 7),
  plural1stPerson: Word('заспиртуем', 7),
  plural2ndPerson: Word('заспиртуете', 7),
  plural3rdPerson: Word('заспиртуют', 7),
  masculinePast: Word('заспиртовал', 9),
  femininePast: Word('заспиртовала', 9),
  neuterPast: Word('заспиртовало', 9),
  pluralPast: Word('заспиртовали', 9),
  imperativeInformal: Word('заспиртуй', 7),
  imperativeFormal: Word('заспиртуйте', 7),
  imperfect: [],
};

perfectVerbs.set(заспиртовать.name.text, заспиртовать);

export { заспиртовать };