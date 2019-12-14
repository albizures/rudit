import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насобирать: PerfectVerb = {
  name: Word('насобирать', 7),
  singular1stPerson: Word('насобираю', 7),
  singular2ndPerson: Word('насобираешь', 7),
  singular3rdPerson: Word('насобирает', 7),
  plural1stPerson: Word('насобираем', 7),
  plural2ndPerson: Word('насобираете', 7),
  plural3rdPerson: Word('насобирают', 7),
  masculinePast: Word('насобирал', 7),
  femininePast: Word('насобирала', 7),
  neuterPast: Word('насобирало', 7),
  pluralPast: Word('насобирали', 7),
  imperativeInformal: Word('насобирай', 7),
  imperativeFormal: Word('насобирайте', 7),
  imperfect: [],
};

perfectVerbs.set(насобирать.name.text, насобирать);

export { насобирать };