import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интересовать: PerfectVerb = {
  name: Word('интересовать', 9),
  singular1stPerson: Word('интересую', 7),
  singular2ndPerson: Word('интересуешь', 7),
  singular3rdPerson: Word('интересует', 7),
  plural1stPerson: Word('интересуем', 7),
  plural2ndPerson: Word('интересуете', 7),
  plural3rdPerson: Word('интересуют', 7),
  masculinePast: Word('интересовал', 9),
  femininePast: Word('интересовала', 9),
  neuterPast: Word('интересовало', 9),
  pluralPast: Word('интересовали', 9),
  imperativeInformal: Word('интересуй', 7),
  imperativeFormal: Word('интересуйте', 7),
  imperfect: ['заинтересовать'],
};

perfectVerbs.set(интересовать.name.text, интересовать);

export { интересовать };