import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завидовать: PerfectVerb = {
  name: Word('завидовать', 3),
  singular1stPerson: Word('завидую', 3),
  singular2ndPerson: Word('завидуешь', 3),
  singular3rdPerson: Word('завидует', 3),
  plural1stPerson: Word('завидуем', 3),
  plural2ndPerson: Word('завидуете', 3),
  plural3rdPerson: Word('завидуют', 3),
  masculinePast: Word('завидовал', 3),
  femininePast: Word('завидовала', 3),
  neuterPast: Word('завидовало', 3),
  pluralPast: Word('завидовали', 3),
  imperativeInformal: Word('завидуй', 3),
  imperativeFormal: Word('завидуйте', 3),
  imperfect: ['позавидовать'],
};

perfectVerbs.set(завидовать.name.text, завидовать);

export { завидовать };