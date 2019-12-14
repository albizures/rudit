import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притирать: PerfectVerb = {
  name: Word('притирать', 6),
  singular1stPerson: Word('притираю', 6),
  singular2ndPerson: Word('притираешь', 6),
  singular3rdPerson: Word('притирает', 6),
  plural1stPerson: Word('притираем', 6),
  plural2ndPerson: Word('притираете', 6),
  plural3rdPerson: Word('притирают', 6),
  masculinePast: Word('притирал', 6),
  femininePast: Word('притирала', 6),
  neuterPast: Word('притирало', 6),
  pluralPast: Word('притирали', 6),
  imperativeInformal: Word('притирай', 6),
  imperativeFormal: Word('притирайте', 6),
  imperfect: [],
};

perfectVerbs.set(притирать.name.text, притирать);

export { притирать };