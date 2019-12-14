import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посетовать: PerfectVerb = {
  name: Word('посетовать', 3),
  singular1stPerson: Word('посетую', 3),
  singular2ndPerson: Word('посетуешь', 3),
  singular3rdPerson: Word('посетует', 3),
  plural1stPerson: Word('посетуем', 3),
  plural2ndPerson: Word('посетуете', 3),
  plural3rdPerson: Word('посетуют', 3),
  masculinePast: Word('посетовал', 3),
  femininePast: Word('посетовала', 3),
  neuterPast: Word('посетовало', 3),
  pluralPast: Word('посетовали', 3),
  imperativeInformal: Word('посетуй', 3),
  imperativeFormal: Word('посетуйте', 3),
  imperfect: [],
};

perfectVerbs.set(посетовать.name.text, посетовать);

export { посетовать };