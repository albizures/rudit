import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припевать: PerfectVerb = {
  name: Word('припевать', 6),
  singular1stPerson: Word('припеваю', 6),
  singular2ndPerson: Word('припеваешь', 6),
  singular3rdPerson: Word('припевает', 6),
  plural1stPerson: Word('припеваем', 6),
  plural2ndPerson: Word('припеваете', 6),
  plural3rdPerson: Word('припевают', 6),
  masculinePast: Word('припевал', 6),
  femininePast: Word('припевала', 6),
  neuterPast: Word('припевало', 6),
  pluralPast: Word('припевали', 6),
  imperativeInformal: Word('припевай', 6),
  imperativeFormal: Word('припевайте', 6),
  imperfect: [],
};

perfectVerbs.set(припевать.name.text, припевать);

export { припевать };