import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переселяться: PerfectVerb = {
  name: Word('переселяться', 7),
  singular1stPerson: Word('переселяюсь', 7),
  singular2ndPerson: Word('переселяешься', 7),
  singular3rdPerson: Word('переселяется', 7),
  plural1stPerson: Word('переселяемся', 7),
  plural2ndPerson: Word('переселяетесь', 7),
  plural3rdPerson: Word('переселяются', 7),
  masculinePast: Word('переселялся', 7),
  femininePast: Word('переселялась', 7),
  neuterPast: Word('переселялось', 7),
  pluralPast: Word('переселялись', 7),
  imperativeInformal: Word('переселяйся', 7),
  imperativeFormal: Word('переселяйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(переселяться.name.text, переселяться);

export { переселяться };