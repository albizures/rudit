import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затевать: PerfectVerb = {
  name: Word('затевать', 5),
  singular1stPerson: Word('затеваю', 5),
  singular2ndPerson: Word('затеваешь', 5),
  singular3rdPerson: Word('затевает', 5),
  plural1stPerson: Word('затеваем', 5),
  plural2ndPerson: Word('затеваете', 5),
  plural3rdPerson: Word('затевают', 5),
  masculinePast: Word('затевал', 5),
  femininePast: Word('затевала', 5),
  neuterPast: Word('затевало', 5),
  pluralPast: Word('затевали', 5),
  imperativeInformal: Word('затевай', 5),
  imperativeFormal: Word('затевайте', 5),
  imperfect: [],
};

perfectVerbs.set(затевать.name.text, затевать);

export { затевать };