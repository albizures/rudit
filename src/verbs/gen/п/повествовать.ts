import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повествовать: PerfectVerb = {
  name: Word('повествовать', 9),
  singular1stPerson: Word('повествую', 7),
  singular2ndPerson: Word('повествуешь', 7),
  singular3rdPerson: Word('повествует', 7),
  plural1stPerson: Word('повествуем', 7),
  plural2ndPerson: Word('повествуете', 7),
  plural3rdPerson: Word('повествуют', 7),
  masculinePast: Word('повествовал', 9),
  femininePast: Word('повествовала', 9),
  neuterPast: Word('повествовало', 9),
  pluralPast: Word('повествовали', 9),
  imperativeInformal: Word('повествуй', 7),
  imperativeFormal: Word('повествуйте', 7),
  imperfect: [],
};

perfectVerbs.set(повествовать.name.text, повествовать);

export { повествовать };