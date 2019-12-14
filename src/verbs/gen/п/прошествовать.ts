import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошествовать: PerfectVerb = {
  name: Word('прошествовать', 4),
  singular1stPerson: Word('прошествую', 4),
  singular2ndPerson: Word('прошествуешь', 4),
  singular3rdPerson: Word('прошествует', 4),
  plural1stPerson: Word('прошествуем', 4),
  plural2ndPerson: Word('прошествуете', 4),
  plural3rdPerson: Word('прошествуют', 4),
  masculinePast: Word('прошествовал', 4),
  femininePast: Word('прошествовала', 4),
  neuterPast: Word('прошествовало', 4),
  pluralPast: Word('прошествовали', 4),
  imperativeInformal: Word('прошествуй', 4),
  imperativeFormal: Word('прошествуйте', 4),
  imperfect: [],
};

perfectVerbs.set(прошествовать.name.text, прошествовать);

export { прошествовать };