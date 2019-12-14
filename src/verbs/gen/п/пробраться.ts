import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пробраться: PerfectVerb = {
  name: Word('пробраться', 5),
  singular1stPerson: Word('проберусь', 6),
  singular2ndPerson: Word('проберёшься', 4),
  singular3rdPerson: Word('проберётся', 4),
  plural1stPerson: Word('проберёмся', 4),
  plural2ndPerson: Word('проберётесь', 4),
  plural3rdPerson: Word('проберутся', 6),
  masculinePast: Word('пробрался', 5),
  femininePast: Word('пробралась', 7),
  neuterPast: Word('пробралось//пробрало'сь', 5),
  pluralPast: Word('пробрались//пробрали'сь', 5),
  imperativeInformal: Word('проберись', 6),
  imperativeFormal: Word('проберитесь', 6),
  imperfect: [],
};

perfectVerbs.set(пробраться.name.text, пробраться);

export { пробраться };