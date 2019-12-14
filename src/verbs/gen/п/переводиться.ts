import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переводиться: PerfectVerb = {
  name: Word('переводиться', 7),
  singular1stPerson: Word('перевожусь', 7),
  singular2ndPerson: Word('переводишься', 5),
  singular3rdPerson: Word('переводится', 5),
  plural1stPerson: Word('переводимся', 5),
  plural2ndPerson: Word('переводитесь', 5),
  plural3rdPerson: Word('переводятся', 5),
  masculinePast: Word('переводился', 7),
  femininePast: Word('переводилась', 7),
  neuterPast: Word('переводилось', 7),
  pluralPast: Word('переводились', 7),
  imperativeInformal: Word('переводись', 7),
  imperativeFormal: Word('переводитесь', 7),
  imperfect: [],
};

perfectVerbs.set(переводиться.name.text, переводиться);

export { переводиться };