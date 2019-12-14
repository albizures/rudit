import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переменяться: PerfectVerb = {
  name: Word('переменяться', 7),
  singular1stPerson: Word('переменяюсь', 7),
  singular2ndPerson: Word('переменяешься', 7),
  singular3rdPerson: Word('переменяется', 7),
  plural1stPerson: Word('переменяемся', 7),
  plural2ndPerson: Word('переменяетесь', 7),
  plural3rdPerson: Word('переменяются', 7),
  masculinePast: Word('переменялся', 7),
  femininePast: Word('переменялась', 7),
  neuterPast: Word('переменялось', 7),
  pluralPast: Word('переменялись', 7),
  imperativeInformal: Word('переменяйся', 7),
  imperativeFormal: Word('переменяйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переменяться.name.text, переменяться);

export { переменяться };