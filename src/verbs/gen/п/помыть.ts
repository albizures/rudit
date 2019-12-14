import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помыть: PerfectVerb = {
  name: Word('помыть', 3),
  singular1stPerson: Word('помою', 3),
  singular2ndPerson: Word('помоешь', 3),
  singular3rdPerson: Word('помоет', 3),
  plural1stPerson: Word('помоем', 3),
  plural2ndPerson: Word('помоете', 3),
  plural3rdPerson: Word('помоют', 3),
  masculinePast: Word('помыл', 3),
  femininePast: Word('помыла', 3),
  neuterPast: Word('помыло', 3),
  pluralPast: Word('помыли', 3),
  imperativeInformal: Word('помой', 3),
  imperativeFormal: Word('помойте', 3),
  imperfect: ['мыть'],
};

perfectVerbs.set(помыть.name.text, помыть);

export { помыть };