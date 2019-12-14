import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попробовать: PerfectVerb = {
  name: Word('попробовать', 4),
  singular1stPerson: Word('попробую', 4),
  singular2ndPerson: Word('попробуешь', 4),
  singular3rdPerson: Word('попробует', 4),
  plural1stPerson: Word('попробуем', 4),
  plural2ndPerson: Word('попробуете', 4),
  plural3rdPerson: Word('попробуют', 4),
  masculinePast: Word('попробовал', 4),
  femininePast: Word('попробовала', 4),
  neuterPast: Word('попробовало', 4),
  pluralPast: Word('попробовали', 4),
  imperativeInformal: Word('попробуй', 4),
  imperativeFormal: Word('попробуйте', 4),
  imperfect: ['пробовать'],
};

perfectVerbs.set(попробовать.name.text, попробовать);

export { попробовать };