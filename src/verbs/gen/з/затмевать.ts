import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затмевать: PerfectVerb = {
  name: Word('затмевать', 6),
  singular1stPerson: Word('затмеваю', 6),
  singular2ndPerson: Word('затмеваешь', 6),
  singular3rdPerson: Word('затмевает', 6),
  plural1stPerson: Word('затмеваем', 6),
  plural2ndPerson: Word('затмеваете', 6),
  plural3rdPerson: Word('затмевают', 6),
  masculinePast: Word('затмевал', 6),
  femininePast: Word('затмевала', 6),
  neuterPast: Word('затмевало', 6),
  pluralPast: Word('затмевали', 6),
  imperativeInformal: Word('затмевай', 6),
  imperativeFormal: Word('затмевайте', 6),
  imperfect: [],
};

perfectVerbs.set(затмевать.name.text, затмевать);

export { затмевать };