import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переобременять: PerfectVerb = {
  name: Word('переобременять', 11),
  singular1stPerson: Word('переобременяю', 11),
  singular2ndPerson: Word('переобременяешь', 11),
  singular3rdPerson: Word('переобременяет', 11),
  plural1stPerson: Word('переобременяем', 11),
  plural2ndPerson: Word('переобременяете', 11),
  plural3rdPerson: Word('переобременяют', 11),
  masculinePast: Word('переобременял', 11),
  femininePast: Word('переобременяла', 11),
  neuterPast: Word('переобременяло', 11),
  pluralPast: Word('переобременяли', 11),
  imperativeInformal: Word('переобременяй', 11),
  imperativeFormal: Word('переобременяйте', 11),
  imperfect: [],
};

perfectVerbs.set(переобременять.name.text, переобременять);

export { переобременять };