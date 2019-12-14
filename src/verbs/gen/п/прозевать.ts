import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозевать: PerfectVerb = {
  name: Word('прозевать', 6),
  singular1stPerson: Word('прозеваю', 6),
  singular2ndPerson: Word('прозеваешь', 6),
  singular3rdPerson: Word('прозевает', 6),
  plural1stPerson: Word('прозеваем', 6),
  plural2ndPerson: Word('прозеваете', 6),
  plural3rdPerson: Word('прозевают', 6),
  masculinePast: Word('прозевал', 6),
  femininePast: Word('прозевала', 6),
  neuterPast: Word('прозевало', 6),
  pluralPast: Word('прозевали', 6),
  imperativeInformal: Word('прозевай', 6),
  imperativeFormal: Word('прозевайте', 6),
  imperfect: [],
};

perfectVerbs.set(прозевать.name.text, прозевать);

export { прозевать };