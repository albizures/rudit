import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переменять: PerfectVerb = {
  name: Word('переменять', 7),
  singular1stPerson: Word('переменяю', 7),
  singular2ndPerson: Word('переменяешь', 7),
  singular3rdPerson: Word('переменяет', 7),
  plural1stPerson: Word('переменяем', 7),
  plural2ndPerson: Word('переменяете', 7),
  plural3rdPerson: Word('переменяют', 7),
  masculinePast: Word('переменял', 7),
  femininePast: Word('переменяла', 7),
  neuterPast: Word('переменяло', 7),
  pluralPast: Word('переменяли', 7),
  imperativeInformal: Word('переменяй', 7),
  imperativeFormal: Word('переменяйте', 7),
  imperfect: [],
};

perfectVerbs.set(переменять.name.text, переменять);

export { переменять };