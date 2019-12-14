import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переместиться: PerfectVerb = {
  name: Word('переместиться', 8),
  singular1stPerson: Word('перемещусь', 7),
  singular2ndPerson: Word('переместишься', 8),
  singular3rdPerson: Word('переместится', 8),
  plural1stPerson: Word('переместимся', 8),
  plural2ndPerson: Word('переместитесь', 8),
  plural3rdPerson: Word('переместятся', 8),
  masculinePast: Word('переместился', 8),
  femininePast: Word('переместилась', 8),
  neuterPast: Word('переместилось', 8),
  pluralPast: Word('переместились', 8),
  imperativeInformal: Word('переместись', 8),
  imperativeFormal: Word('переместитесь', 8),
  imperfect: [],
};

perfectVerbs.set(переместиться.name.text, переместиться);

export { переместиться };