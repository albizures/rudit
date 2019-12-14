import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разобраться: PerfectVerb = {
  name: Word('разобраться', 6),
  singular1stPerson: Word('разберусь', 6),
  singular2ndPerson: Word('разберёшься', 6),
  singular3rdPerson: Word('разберётся', 6),
  plural1stPerson: Word('разберёмся', 6),
  plural2ndPerson: Word('разберётесь', 6),
  plural3rdPerson: Word('разберутся', 6),
  masculinePast: Word('разобрался', 6),
  femininePast: Word('разобралась', 8),
  neuterPast: Word('разобралось,разобрало'сь', 6),
  pluralPast: Word('разобрались,разобрали'сь', 6),
  imperativeInformal: Word('разберись', 6),
  imperativeFormal: Word('разберитесь', 6),
  imperfect: ['разбираться'],
};

perfectVerbs.set(разобраться.name.text, разобраться);

export { разобраться };