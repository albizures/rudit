import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выть: PerfectVerb = {
  name: Word('выть', 1),
  singular1stPerson: Word('вою', 1),
  singular2ndPerson: Word('воешь', 1),
  singular3rdPerson: Word('воет', 1),
  plural1stPerson: Word('воем', 1),
  plural2ndPerson: Word('воете', 1),
  plural3rdPerson: Word('воют', 1),
  masculinePast: Word('выл', 1),
  femininePast: Word('выла', 1),
  neuterPast: Word('выло', 1),
  pluralPast: Word('выли', 1),
  imperativeInformal: Word('вой', 1),
  imperativeFormal: Word('войте', 1),
  imperfect: ['взвыть','завыть'],
};

perfectVerbs.set(выть.name.text, выть);

export { выть };