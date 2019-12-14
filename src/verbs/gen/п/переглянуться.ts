import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переглянуться: PerfectVerb = {
  name: Word('переглянуться', 8),
  singular1stPerson: Word('переглянусь', 8),
  singular2ndPerson: Word('переглянешься', 6),
  singular3rdPerson: Word('переглянется', 6),
  plural1stPerson: Word('переглянемся', 6),
  plural2ndPerson: Word('переглянетесь', 6),
  plural3rdPerson: Word('переглянутся', 6),
  masculinePast: Word('переглянулся', 8),
  femininePast: Word('переглянулась', 8),
  neuterPast: Word('переглянулось', 8),
  pluralPast: Word('переглянулись', 8),
  imperativeInformal: Word('переглянись', 8),
  imperativeFormal: Word('переглянитесь', 8),
  imperfect: [],
};

perfectVerbs.set(переглянуться.name.text, переглянуться);

export { переглянуться };