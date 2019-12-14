import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поспевать: PerfectVerb = {
  name: Word('поспевать', 6),
  singular1stPerson: Word('поспеваю', 6),
  singular2ndPerson: Word('поспеваешь', 6),
  singular3rdPerson: Word('поспевает', 6),
  plural1stPerson: Word('поспеваем', 6),
  plural2ndPerson: Word('поспеваете', 6),
  plural3rdPerson: Word('поспевают', 6),
  masculinePast: Word('поспевал', 6),
  femininePast: Word('поспевала', 6),
  neuterPast: Word('поспевало', 6),
  pluralPast: Word('поспевали', 6),
  imperativeInformal: Word('поспевай', 6),
  imperativeFormal: Word('поспевайте', 6),
  imperfect: [],
};

perfectVerbs.set(поспевать.name.text, поспевать);

export { поспевать };