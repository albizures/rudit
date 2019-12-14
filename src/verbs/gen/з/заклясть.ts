import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заклясть: PerfectVerb = {
  name: Word('заклясть', 4),
  singular1stPerson: Word('закляну', 6),
  singular2ndPerson: Word('заклянёшь', 1),
  singular3rdPerson: Word('заклянёт', 1),
  plural1stPerson: Word('заклянём', 1),
  plural2ndPerson: Word('заклянёте', 1),
  plural3rdPerson: Word('заклянут', 6),
  masculinePast: Word('заклял', 4),
  femininePast: Word('закляла', 6),
  neuterPast: Word('закляло', 4),
  pluralPast: Word('закляли', 4),
  imperativeInformal: Word('закляни', 6),
  imperativeFormal: Word('закляните', 6),
  imperfect: [],
};

perfectVerbs.set(заклясть.name.text, заклясть);

export { заклясть };