import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переселиться: PerfectVerb = {
  name: Word('переселиться', 7),
  singular1stPerson: Word('переселюсь', 7),
  singular2ndPerson: Word('переселишься', 7),
  singular3rdPerson: Word('переселится', 7),
  plural1stPerson: Word('переселимся', 7),
  plural2ndPerson: Word('переселитесь', 7),
  plural3rdPerson: Word('переселятся', 7),
  masculinePast: Word('переселился', 7),
  femininePast: Word('переселилась', 7),
  neuterPast: Word('переселилось', 7),
  pluralPast: Word('переселились', 7),
  imperativeInformal: Word('переселись', 7),
  imperativeFormal: Word('переселитесь', 7),
  imperfect: [],
};

perfectVerbs.set(переселиться.name.text, переселиться);

export { переселиться };