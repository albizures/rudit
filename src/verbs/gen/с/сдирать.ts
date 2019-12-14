import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сдирать: PerfectVerb = {
  name: Word('сдирать', 4),
  singular1stPerson: Word('сдираю', 4),
  singular2ndPerson: Word('сдираешь', 4),
  singular3rdPerson: Word('сдирает', 4),
  plural1stPerson: Word('сдираем', 4),
  plural2ndPerson: Word('сдираете', 4),
  plural3rdPerson: Word('сдирают', 4),
  masculinePast: Word('сдирал', 4),
  femininePast: Word('сдирала', 4),
  neuterPast: Word('сдирало', 4),
  pluralPast: Word('сдирали', 4),
  imperativeInformal: Word('сдирай', 4),
  imperativeFormal: Word('сдирайте', 4),
  imperfect: [],
};

perfectVerbs.set(сдирать.name.text, сдирать);

export { сдирать };