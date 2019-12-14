import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдирать: PerfectVerb = {
  name: Word('выдирать', 5),
  singular1stPerson: Word('выдираю', 5),
  singular2ndPerson: Word('выдираешь', 5),
  singular3rdPerson: Word('выдирает', 5),
  plural1stPerson: Word('выдираем', 5),
  plural2ndPerson: Word('выдираете', 5),
  plural3rdPerson: Word('выдирают', 5),
  masculinePast: Word('выдирал', 5),
  femininePast: Word('выдирала', 5),
  neuterPast: Word('выдирало', 5),
  pluralPast: Word('выдирали', 5),
  imperativeInformal: Word('выдирай', 5),
  imperativeFormal: Word('выдирайте', 5),
  imperfect: [],
};

perfectVerbs.set(выдирать.name.text, выдирать);

export { выдирать };