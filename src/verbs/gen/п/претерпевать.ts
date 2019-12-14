import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const претерпевать: PerfectVerb = {
  name: Word('претерпевать', 9),
  singular1stPerson: Word('претерпеваю', 9),
  singular2ndPerson: Word('претерпеваешь', 9),
  singular3rdPerson: Word('претерпевает', 9),
  plural1stPerson: Word('претерпеваем', 9),
  plural2ndPerson: Word('претерпеваете', 9),
  plural3rdPerson: Word('претерпевают', 9),
  masculinePast: Word('претерпевал', 9),
  femininePast: Word('претерпевала', 9),
  neuterPast: Word('претерпевало', 9),
  pluralPast: Word('претерпевали', 9),
  imperativeInformal: Word('претерпевай', 9),
  imperativeFormal: Word('претерпевайте', 9),
  imperfect: [],
};

perfectVerbs.set(претерпевать.name.text, претерпевать);

export { претерпевать };