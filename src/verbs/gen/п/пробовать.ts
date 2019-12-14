import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробовать: PerfectVerb = {
  name: Word('пробовать', 2),
  singular1stPerson: Word('пробую', 2),
  singular2ndPerson: Word('пробуешь', 2),
  singular3rdPerson: Word('пробует', 2),
  plural1stPerson: Word('пробуем', 2),
  plural2ndPerson: Word('пробуете', 2),
  plural3rdPerson: Word('пробуют', 2),
  masculinePast: Word('пробовал', 2),
  femininePast: Word('пробовала', 2),
  neuterPast: Word('пробовало', 2),
  pluralPast: Word('пробовали', 2),
  imperativeInformal: Word('пробуй', 2),
  imperativeFormal: Word('пробуйте', 2),
  imperfect: ['попробовать'],
};

perfectVerbs.set(пробовать.name.text, пробовать);

export { пробовать };