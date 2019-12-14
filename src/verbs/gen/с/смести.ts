import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смести: PerfectVerb = {
  name: Word('смести', 5),
  singular1stPerson: Word('смету', 4),
  singular2ndPerson: Word('сметёшь', 4),
  singular3rdPerson: Word('сметёт', 4),
  plural1stPerson: Word('сметём', 4),
  plural2ndPerson: Word('сметёте', 4),
  plural3rdPerson: Word('сметут', 4),
  masculinePast: Word('смёл', 2),
  femininePast: Word('смела', 4),
  neuterPast: Word('смело', 4),
  pluralPast: Word('смели', 4),
  imperativeInformal: Word('смети', 4),
  imperativeFormal: Word('сметите', 4),
  imperfect: [],
};

perfectVerbs.set(смести.name.text, смести);

export { смести };