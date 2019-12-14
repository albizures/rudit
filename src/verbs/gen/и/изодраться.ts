import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изодраться: PerfectVerb = {
  name: Word('изодраться', 5),
  singular1stPerson: Word('издерусь', 5),
  singular2ndPerson: Word('издерёшься', 3),
  singular3rdPerson: Word('издерётся', 3),
  plural1stPerson: Word('издерёмся', 3),
  plural2ndPerson: Word('издерётесь', 3),
  plural3rdPerson: Word('издерутся', 5),
  masculinePast: Word('изодрался', 5),
  femininePast: Word('изодралась', 7),
  neuterPast: Word('изодралось//изодрало'сь', 5),
  pluralPast: Word('изодрались//изодрали'сь', 5),
  imperativeInformal: Word('издерись', 5),
  imperativeFormal: Word('издеритесь', 5),
  imperfect: [],
};

perfectVerbs.set(изодраться.name.text, изодраться);

export { изодраться };