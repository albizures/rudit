import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переполняться: PerfectVerb = {
  name: Word('переполняться', 8),
  singular1stPerson: Word('переполняюсь', 8),
  singular2ndPerson: Word('переполняешься', 8),
  singular3rdPerson: Word('переполняется', 8),
  plural1stPerson: Word('переполняемся', 8),
  plural2ndPerson: Word('переполняетесь', 8),
  plural3rdPerson: Word('переполняются', 8),
  masculinePast: Word('переполнялся', 8),
  femininePast: Word('переполнялась', 8),
  neuterPast: Word('переполнялось', 8),
  pluralPast: Word('переполнялись', 8),
  imperativeInformal: Word('переполняйся', 8),
  imperativeFormal: Word('переполняйтесь', 8),
  imperfect: [],
};

perfectVerbs.set(переполняться.name.text, переполняться);

export { переполняться };