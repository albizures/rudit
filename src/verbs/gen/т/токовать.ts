import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const токовать: PerfectVerb = {
  name: Word('токовать', 5),
  singular1stPerson: Word('токую', 3),
  singular2ndPerson: Word('токуешь', 3),
  singular3rdPerson: Word('токует', 3),
  plural1stPerson: Word('токуем', 3),
  plural2ndPerson: Word('токуете', 3),
  plural3rdPerson: Word('токуют', 3),
  masculinePast: Word('токовал', 5),
  femininePast: Word('токовала', 5),
  neuterPast: Word('токовало', 5),
  pluralPast: Word('токовали', 5),
  imperativeInformal: Word('токуй', 3),
  imperativeFormal: Word('токуйте', 3),
  imperfect: [],
};

perfectVerbs.set(токовать.name.text, токовать);

export { токовать };