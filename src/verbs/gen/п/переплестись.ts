import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплестись: PerfectVerb = {
  name: Word('переплестись', 9),
  singular1stPerson: Word('переплетусь', 8),
  singular2ndPerson: Word('переплетёшься', 1),
  singular3rdPerson: Word('переплетётся', 1),
  plural1stPerson: Word('переплетёмся', 1),
  plural2ndPerson: Word('переплетётесь', 1),
  plural3rdPerson: Word('переплетутся', 8),
  masculinePast: Word('переплёлся', 1),
  femininePast: Word('переплелась', 8),
  neuterPast: Word('переплелось', 8),
  pluralPast: Word('переплелись', 8),
  imperativeInformal: Word('переплетись', 8),
  imperativeFormal: Word('переплетитесь', 8),
  imperfect: [],
};

perfectVerbs.set(переплестись.name.text, переплестись);

export { переплестись };