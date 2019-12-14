import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переодевать: PerfectVerb = {
  name: Word('переодевать', 8),
  singular1stPerson: Word('переодеваю', 8),
  singular2ndPerson: Word('переодеваешь', 8),
  singular3rdPerson: Word('переодевает', 8),
  plural1stPerson: Word('переодеваем', 8),
  plural2ndPerson: Word('переодеваете', 8),
  plural3rdPerson: Word('переодевают', 8),
  masculinePast: Word('переодевал', 8),
  femininePast: Word('переодевала', 8),
  neuterPast: Word('переодевало', 8),
  pluralPast: Word('переодевали', 8),
  imperativeInformal: Word('переодевай', 8),
  imperativeFormal: Word('переодевайте', 8),
  imperfect: [],
};

perfectVerbs.set(переодевать.name.text, переодевать);

export { переодевать };