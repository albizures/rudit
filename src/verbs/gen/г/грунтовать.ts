import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const грунтовать: PerfectVerb = {
  name: Word('грунтовать', 7),
  singular1stPerson: Word('грунтую', 5),
  singular2ndPerson: Word('грунтуешь', 5),
  singular3rdPerson: Word('грунтует', 5),
  plural1stPerson: Word('грунтуем', 5),
  plural2ndPerson: Word('грунтуете', 5),
  plural3rdPerson: Word('грунтуют', 5),
  masculinePast: Word('грунтовал', 7),
  femininePast: Word('грунтовала', 7),
  neuterPast: Word('грунтовало', 7),
  pluralPast: Word('грунтовали', 7),
  imperativeInformal: Word('грунтуй', 5),
  imperativeFormal: Word('грунтуйте', 5),
  imperfect: [],
};

perfectVerbs.set(грунтовать.name.text, грунтовать);

export { грунтовать };