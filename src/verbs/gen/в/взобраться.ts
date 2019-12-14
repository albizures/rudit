import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взобраться: PerfectVerb = {
  name: Word('взобраться', 5),
  singular1stPerson: Word('взберусь', 5),
  singular2ndPerson: Word('взберёшься', 5),
  singular3rdPerson: Word('взберётся', 5),
  plural1stPerson: Word('взберёмся', 5),
  plural2ndPerson: Word('взберётесь', 5),
  plural3rdPerson: Word('взберутся', 5),
  masculinePast: Word('взобрался', 5),
  femininePast: Word('взобралась', 5),
  neuterPast: Word('взобралось,взобрало'сь', 5),
  pluralPast: Word('взобрались', 5),
  imperativeInformal: Word('взберись', 5),
  imperativeFormal: Word('взберитесь', 5),
  imperfect: ['взбираться'],
};

perfectVerbs.set(взобраться.name.text, взобраться);

export { взобраться };