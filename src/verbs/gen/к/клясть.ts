import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клясть: PerfectVerb = {
  name: Word('клясть', 2),
  singular1stPerson: Word('кляну', 4),
  singular2ndPerson: Word('клянёшь', 4),
  singular3rdPerson: Word('клянёт', 4),
  plural1stPerson: Word('клянём', 4),
  plural2ndPerson: Word('клянёте', 4),
  plural3rdPerson: Word('клянут', 4),
  masculinePast: Word('клял', 2),
  femininePast: Word('кляла', 4),
  neuterPast: Word('кляло', 2),
  pluralPast: Word('кляли', 2),
  imperativeInformal: Word('кляни', 4),
  imperativeFormal: Word('кляните', 4),
  imperfect: ['проклясть'],
};

perfectVerbs.set(клясть.name.text, клясть);

export { клясть };