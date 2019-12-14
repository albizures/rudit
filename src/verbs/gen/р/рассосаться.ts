import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассосаться: PerfectVerb = {
  name: Word('рассосаться', 6),
  singular1stPerson: Word('рассосусь', 6),
  singular2ndPerson: Word('рассосёшься', 6),
  singular3rdPerson: Word('рассосётся', 6),
  plural1stPerson: Word('рассосёмся', 6),
  plural2ndPerson: Word('рассосётесь', 6),
  plural3rdPerson: Word('рассосутся', 6),
  masculinePast: Word('рассосался', 6),
  femininePast: Word('рассосалась', 6),
  neuterPast: Word('рассосалось', 6),
  pluralPast: Word('рассосались', 6),
  imperativeInformal: Word('рассосись', 6),
  imperativeFormal: Word('рассоситесь', 6),
  imperfect: [],
};

perfectVerbs.set(рассосаться.name.text, рассосаться);

export { рассосаться };