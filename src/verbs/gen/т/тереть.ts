import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тереть: PerfectVerb = {
  name: Word('тереть', 3),
  singular1stPerson: Word('тру', 2),
  singular2ndPerson: Word('трёшь', 2),
  singular3rdPerson: Word('трёт', 2),
  plural1stPerson: Word('трём', 2),
  plural2ndPerson: Word('трёте', 4),
  plural3rdPerson: Word('трут', 2),
  masculinePast: Word('тёр', 1),
  femininePast: Word('тёрла', 4),
  neuterPast: Word('тёрло', 4),
  pluralPast: Word('тёрли', 4),
  imperativeInformal: Word('три', 2),
  imperativeFormal: Word('трите', 2),
  imperfect: ['потереть'],
};

perfectVerbs.set(тереть.name.text, тереть);

export { тереть };