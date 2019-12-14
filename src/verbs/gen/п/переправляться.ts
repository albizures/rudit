import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переправляться: PerfectVerb = {
  name: Word('переправляться', 9),
  singular1stPerson: Word('переправляюсь', 9),
  singular2ndPerson: Word('переправляешься', 9),
  singular3rdPerson: Word('переправляется', 9),
  plural1stPerson: Word('переправляемся', 9),
  plural2ndPerson: Word('переправляетесь', 9),
  plural3rdPerson: Word('переправляются', 9),
  masculinePast: Word('переправлялся', 9),
  femininePast: Word('переправлялась', 9),
  neuterPast: Word('переправлялось', 9),
  pluralPast: Word('переправлялись', 9),
  imperativeInformal: Word('переправляйся', 9),
  imperativeFormal: Word('переправляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(переправляться.name.text, переправляться);

export { переправляться };