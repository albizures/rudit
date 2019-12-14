import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кредитовать: PerfectVerb = {
  name: Word('кредитовать', 8),
  singular1stPerson: Word('кредитую', 6),
  singular2ndPerson: Word('кредитуешь', 6),
  singular3rdPerson: Word('кредитует', 6),
  plural1stPerson: Word('кредитуем', 6),
  plural2ndPerson: Word('кредитуете', 6),
  plural3rdPerson: Word('кредитуют', 6),
  masculinePast: Word('кредитовал', 8),
  femininePast: Word('кредитовала', 8),
  neuterPast: Word('кредитовало', 8),
  pluralPast: Word('кредитовали', 8),
  imperativeInformal: Word('кредитуй', 6),
  imperativeFormal: Word('кредитуйте', 6),
  imperfect: [],
};

perfectVerbs.set(кредитовать.name.text, кредитовать);

export { кредитовать };