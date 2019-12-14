import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привирать: PerfectVerb = {
  name: Word('привирать', 6),
  singular1stPerson: Word('привираю', 6),
  singular2ndPerson: Word('привираешь', 6),
  singular3rdPerson: Word('привирает', 6),
  plural1stPerson: Word('привираем', 6),
  plural2ndPerson: Word('привираете', 6),
  plural3rdPerson: Word('привирают', 6),
  masculinePast: Word('привирал', 6),
  femininePast: Word('привирала', 6),
  neuterPast: Word('привирало', 6),
  pluralPast: Word('привирали', 6),
  imperativeInformal: Word('привирай', 6),
  imperativeFormal: Word('привирайте', 6),
  imperfect: [],
};

perfectVerbs.set(привирать.name.text, привирать);

export { привирать };