import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распевать: PerfectVerb = {
  name: Word('распевать', 6),
  singular1stPerson: Word('распеваю', 6),
  singular2ndPerson: Word('распеваешь', 6),
  singular3rdPerson: Word('распевает', 6),
  plural1stPerson: Word('распеваем', 6),
  plural2ndPerson: Word('распеваете', 6),
  plural3rdPerson: Word('распевают', 6),
  masculinePast: Word('распевал', 6),
  femininePast: Word('распевала', 6),
  neuterPast: Word('распевало', 6),
  pluralPast: Word('распевали', 6),
  imperativeInformal: Word('распевай', 6),
  imperativeFormal: Word('распевайте', 6),
  imperfect: [],
};

perfectVerbs.set(распевать.name.text, распевать);

export { распевать };