import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рыть: PerfectVerb = {
  name: Word('рыть', 1),
  singular1stPerson: Word('рою', 1),
  singular2ndPerson: Word('роешь', 1),
  singular3rdPerson: Word('роет', 1),
  plural1stPerson: Word('роем', 1),
  plural2ndPerson: Word('роете', 1),
  plural3rdPerson: Word('роют', 1),
  masculinePast: Word('рыл', 1),
  femininePast: Word('рыла', 1),
  neuterPast: Word('рыло', 1),
  pluralPast: Word('рыли', 1),
  imperativeInformal: Word('рой', 1),
  imperativeFormal: Word('ройте', 1),
  imperfect: ['вырыть','нарыть','подрыть'],
};

perfectVerbs.set(рыть.name.text, рыть);

export { рыть };