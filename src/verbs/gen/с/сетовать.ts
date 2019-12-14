import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сетовать: PerfectVerb = {
  name: Word('сетовать', 1),
  singular1stPerson: Word('сетую', 1),
  singular2ndPerson: Word('сетуешь', 1),
  singular3rdPerson: Word('сетует', 1),
  plural1stPerson: Word('сетуем', 1),
  plural2ndPerson: Word('сетуете', 1),
  plural3rdPerson: Word('сетуют', 1),
  masculinePast: Word('сетовал', 1),
  femininePast: Word('сетовала', 1),
  neuterPast: Word('сетовало', 1),
  pluralPast: Word('сетовали', 1),
  imperativeInformal: Word('сетуй', 1),
  imperativeFormal: Word('сетуйте', 1),
  imperfect: [],
};

perfectVerbs.set(сетовать.name.text, сетовать);

export { сетовать };