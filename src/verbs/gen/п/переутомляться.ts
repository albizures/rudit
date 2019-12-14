import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переутомляться: PerfectVerb = {
  name: Word('переутомляться', 9),
  singular1stPerson: Word('переутомляюсь', 9),
  singular2ndPerson: Word('переутомляешься', 9),
  singular3rdPerson: Word('переутомляется', 9),
  plural1stPerson: Word('переутомляемся', 9),
  plural2ndPerson: Word('переутомляетесь', 9),
  plural3rdPerson: Word('переутомляются', 9),
  masculinePast: Word('переутомлялся', 9),
  femininePast: Word('переутомлялась', 9),
  neuterPast: Word('переутомлялось', 9),
  pluralPast: Word('переутомлялись', 9),
  imperativeInformal: Word('переутомляйся', 9),
  imperativeFormal: Word('переутомляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(переутомляться.name.text, переутомляться);

export { переутомляться };