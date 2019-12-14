import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вбирать: PerfectVerb = {
  name: Word('вбирать', 4),
  singular1stPerson: Word('вбираю', 4),
  singular2ndPerson: Word('вбираешь', 4),
  singular3rdPerson: Word('вбирает', 4),
  plural1stPerson: Word('вбираем', 4),
  plural2ndPerson: Word('вбираете', 4),
  plural3rdPerson: Word('вбирают', 4),
  masculinePast: Word('вбирал', 4),
  femininePast: Word('вбирала', 4),
  neuterPast: Word('вбирало', 4),
  pluralPast: Word('вбирали', 4),
  imperativeInformal: Word('вбирай', 4),
  imperativeFormal: Word('вбирайте', 4),
  imperfect: ['вобрать'],
};

perfectVerbs.set(вбирать.name.text, вбирать);

export { вбирать };