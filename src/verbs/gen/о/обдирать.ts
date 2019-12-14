import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдирать: PerfectVerb = {
  name: Word('обдирать', 5),
  singular1stPerson: Word('обдираю', 5),
  singular2ndPerson: Word('обдираешь', 5),
  singular3rdPerson: Word('обдирает', 5),
  plural1stPerson: Word('обдираем', 5),
  plural2ndPerson: Word('обдираете', 5),
  plural3rdPerson: Word('обдирают', 5),
  masculinePast: Word('обдирал', 5),
  femininePast: Word('обдирала', 5),
  neuterPast: Word('обдирало', 5),
  pluralPast: Word('обдирали', 5),
  imperativeInformal: Word('обдирай', 5),
  imperativeFormal: Word('обдирайте', 5),
  imperfect: [],
};

perfectVerbs.set(обдирать.name.text, обдирать);

export { обдирать };