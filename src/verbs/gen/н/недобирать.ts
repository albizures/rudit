import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недобирать: PerfectVerb = {
  name: Word('недобирать', 7),
  singular1stPerson: Word('недобираю', 7),
  singular2ndPerson: Word('недобираешь', 7),
  singular3rdPerson: Word('недобирает', 7),
  plural1stPerson: Word('недобираем', 7),
  plural2ndPerson: Word('недобираете', 7),
  plural3rdPerson: Word('недобирают', 7),
  masculinePast: Word('недобирал', 7),
  femininePast: Word('недобирала', 7),
  neuterPast: Word('недобирало', 7),
  pluralPast: Word('недобирали', 7),
  imperativeInformal: Word('недобирай', 7),
  imperativeFormal: Word('недобирайте', 7),
  imperfect: [],
};

perfectVerbs.set(недобирать.name.text, недобирать);

export { недобирать };