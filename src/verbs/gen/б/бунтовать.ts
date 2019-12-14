import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бунтовать: PerfectVerb = {
  name: Word('бунтовать', 6),
  singular1stPerson: Word('бунтую', 4),
  singular2ndPerson: Word('бунтуешь', 4),
  singular3rdPerson: Word('бунтует', 4),
  plural1stPerson: Word('бунтуем', 4),
  plural2ndPerson: Word('бунтуете', 4),
  plural3rdPerson: Word('бунтуют', 4),
  masculinePast: Word('бунтовал', 6),
  femininePast: Word('бунтовала', 6),
  neuterPast: Word('бунтовало', 6),
  pluralPast: Word('бунтовали', 6),
  imperativeInformal: Word('бунтуй', 4),
  imperativeFormal: Word('бунтуйте', 4),
  imperfect: [],
};

perfectVerbs.set(бунтовать.name.text, бунтовать);

export { бунтовать };