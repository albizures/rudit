import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распирать: PerfectVerb = {
  name: Word('распирать', 6),
  singular1stPerson: Word('распираю', 6),
  singular2ndPerson: Word('распираешь', 6),
  singular3rdPerson: Word('распирает', 6),
  plural1stPerson: Word('распираем', 6),
  plural2ndPerson: Word('распираете', 6),
  plural3rdPerson: Word('распирают', 6),
  masculinePast: Word('распирал', 6),
  femininePast: Word('распирала', 6),
  neuterPast: Word('распирало', 6),
  pluralPast: Word('распирали', 6),
  imperativeInformal: Word('распирай', 6),
  imperativeFormal: Word('распирайте', 6),
  imperfect: [],
};

perfectVerbs.set(распирать.name.text, распирать);

export { распирать };