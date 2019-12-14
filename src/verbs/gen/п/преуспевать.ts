import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преуспевать: PerfectVerb = {
  name: Word('преуспевать', 8),
  singular1stPerson: Word('преуспеваю', 8),
  singular2ndPerson: Word('преуспеваешь', 8),
  singular3rdPerson: Word('преуспевает', 8),
  plural1stPerson: Word('преуспеваем', 8),
  plural2ndPerson: Word('преуспеваете', 8),
  plural3rdPerson: Word('преуспевают', 8),
  masculinePast: Word('преуспевал', 8),
  femininePast: Word('преуспевала', 8),
  neuterPast: Word('преуспевало', 8),
  pluralPast: Word('преуспевали', 8),
  imperativeInformal: Word('преуспевай', 8),
  imperativeFormal: Word('преуспевайте', 8),
  imperfect: [],
};

perfectVerbs.set(преуспевать.name.text, преуспевать);

export { преуспевать };