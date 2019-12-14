import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переродиться: PerfectVerb = {
  name: Word('переродиться', 7),
  singular1stPerson: Word('перерожусь', 7),
  singular2ndPerson: Word('переродишься', 7),
  singular3rdPerson: Word('переродится', 7),
  plural1stPerson: Word('переродимся', 7),
  plural2ndPerson: Word('переродитесь', 7),
  plural3rdPerson: Word('переродятся', 7),
  masculinePast: Word('переродился', 7),
  femininePast: Word('переродилась', 7),
  neuterPast: Word('переродилось', 7),
  pluralPast: Word('переродились', 7),
  imperativeInformal: Word('переродись', 7),
  imperativeFormal: Word('переродитесь', 7),
  imperfect: [],
};

perfectVerbs.set(переродиться.name.text, переродиться);

export { переродиться };