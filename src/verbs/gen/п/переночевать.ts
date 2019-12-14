import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переночевать: PerfectVerb = {
  name: Word('переночевать', 9),
  singular1stPerson: Word('переночую', 7),
  singular2ndPerson: Word('переночуешь', 7),
  singular3rdPerson: Word('переночует', 7),
  plural1stPerson: Word('переночуем', 7),
  plural2ndPerson: Word('переночуете', 7),
  plural3rdPerson: Word('переночуют', 7),
  masculinePast: Word('переночевал', 9),
  femininePast: Word('переночевала', 9),
  neuterPast: Word('переночевало', 9),
  pluralPast: Word('переночевали', 9),
  imperativeInformal: Word('переночуй', 7),
  imperativeFormal: Word('переночуйте', 7),
  imperfect: [],
};

perfectVerbs.set(переночевать.name.text, переночевать);

export { переночевать };