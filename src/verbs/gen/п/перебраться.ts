import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перебраться: PerfectVerb = {
  name: Word('перебраться', 6),
  singular1stPerson: Word('переберусь', 7),
  singular2ndPerson: Word('переберёшься', 7),
  singular3rdPerson: Word('переберётся', 7),
  plural1stPerson: Word('переберёмся', 7),
  plural2ndPerson: Word('переберётесь', 7),
  plural3rdPerson: Word('переберутся', 7),
  masculinePast: Word('перебрался', 6),
  femininePast: Word('перебралась', 8),
  neuterPast: Word('перебралось//перебрало'сь', 6),
  pluralPast: Word('перебрались//перебрали'сь', 6),
  imperativeInformal: Word('переберись', 7),
  imperativeFormal: Word('переберитесь', 7),
  imperfect: [],
};

perfectVerbs.set(перебраться.name.text, перебраться);

export { перебраться };