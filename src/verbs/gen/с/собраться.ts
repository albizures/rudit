import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const собраться: PerfectVerb = {
  name: Word('собраться', 4),
  singular1stPerson: Word('соберусь', 5),
  singular2ndPerson: Word('соберёшься', 3),
  singular3rdPerson: Word('соберётся', 3),
  plural1stPerson: Word('соберёмся', 3),
  plural2ndPerson: Word('соберётесь', 3),
  plural3rdPerson: Word('соберутся', 5),
  masculinePast: Word('собрался', 4),
  femininePast: Word('собралась', 6),
  neuterPast: Word('собралось,собрало'сь', 4),
  pluralPast: Word('собрались,собрали'сь', 4),
  imperativeInformal: Word('соберись', 5),
  imperativeFormal: Word('соберитесь', 5),
  imperfect: ['собираться'],
};

perfectVerbs.set(собраться.name.text, собраться);

export { собраться };