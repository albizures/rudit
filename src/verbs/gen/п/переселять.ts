import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переселять: PerfectVerb = {
  name: Word('переселять', 7),
  singular1stPerson: Word('переселяю', 7),
  singular2ndPerson: Word('переселяешь', 7),
  singular3rdPerson: Word('переселяет', 7),
  plural1stPerson: Word('переселяем', 7),
  plural2ndPerson: Word('переселяете', 7),
  plural3rdPerson: Word('переселяют', 7),
  masculinePast: Word('переселял', 7),
  femininePast: Word('переселяла', 7),
  neuterPast: Word('переселяло', 7),
  pluralPast: Word('переселяли', 7),
  imperativeInformal: Word('переселяй', 7),
  imperativeFormal: Word('переселяйте', 7),
  imperfect: [],
};

perfectVerbs.set(переселять.name.text, переселять);

export { переселять };