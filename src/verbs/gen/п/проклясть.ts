import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проклясть: PerfectVerb = {
  name: Word('проклясть', 5),
  singular1stPerson: Word('прокляну', 7),
  singular2ndPerson: Word('проклянёшь', 2),
  singular3rdPerson: Word('проклянёт', 2),
  plural1stPerson: Word('проклянём', 2),
  plural2ndPerson: Word('проклянёте', 9),
  plural3rdPerson: Word('проклянут', 7),
  masculinePast: Word('проклял', 2),
  femininePast: Word('прокляла', 7),
  neuterPast: Word('прокляло', 2),
  pluralPast: Word('прокляли', 2),
  imperativeInformal: Word('прокляни', 7),
  imperativeFormal: Word('прокляните', 7),
  imperfect: ['проклинать','клясть'],
};

perfectVerbs.set(проклясть.name.text, проклясть);

export { проклясть };