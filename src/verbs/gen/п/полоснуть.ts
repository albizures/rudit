import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полоснуть: PerfectVerb = {
  name: Word('полоснуть', 6),
  singular1stPerson: Word('полосну', 6),
  singular2ndPerson: Word('полоснёшь', 1),
  singular3rdPerson: Word('полоснёт', 1),
  plural1stPerson: Word('полоснём', 1),
  plural2ndPerson: Word('полоснёте', 8),
  plural3rdPerson: Word('полоснут', 6),
  masculinePast: Word('полоснул', 6),
  femininePast: Word('полоснула', 6),
  neuterPast: Word('полоснуло', 6),
  pluralPast: Word('полоснули', 6),
  imperativeInformal: Word('полосни', 6),
  imperativeFormal: Word('полосните', 6),
  imperfect: [],
};

perfectVerbs.set(полоснуть.name.text, полоснуть);

export { полоснуть };