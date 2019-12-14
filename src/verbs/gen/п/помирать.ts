import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помирать: PerfectVerb = {
  name: Word('помирать', 5),
  singular1stPerson: Word('помираю', 5),
  singular2ndPerson: Word('помираешь', 5),
  singular3rdPerson: Word('помирает', 5),
  plural1stPerson: Word('помираем', 5),
  plural2ndPerson: Word('помираете', 5),
  plural3rdPerson: Word('помирают', 5),
  masculinePast: Word('помирал', 5),
  femininePast: Word('помирала', 5),
  neuterPast: Word('помирало', 5),
  pluralPast: Word('помирали', 5),
  imperativeInformal: Word('помирай', 5),
  imperativeFormal: Word('помирайте', 5),
  imperfect: ['помереть'],
};

perfectVerbs.set(помирать.name.text, помирать);

export { помирать };