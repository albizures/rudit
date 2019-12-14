import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смести: PerfectVerb = {
  name: Word('смести', 5),
  singular1stPerson: Word('смету', 4),
  singular2ndPerson: Word('сметёшь', 2),
  singular3rdPerson: Word('сметёт', 2),
  plural1stPerson: Word('сметём', 2),
  plural2ndPerson: Word('сметёте', 2),
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