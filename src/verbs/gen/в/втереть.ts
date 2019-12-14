import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втереть: PerfectVerb = {
  name: Word('втереть', 4),
  singular1stPerson: Word('вотру', 4),
  singular2ndPerson: Word('вотрёшь', 1),
  singular3rdPerson: Word('вотрёт', 1),
  plural1stPerson: Word('вотрём', 1),
  plural2ndPerson: Word('вотрёте', 6),
  plural3rdPerson: Word('вотрут', 4),
  masculinePast: Word('втёр', 2),
  femininePast: Word('втёрла', 5),
  neuterPast: Word('втёрло', 5),
  pluralPast: Word('втёрли', 5),
  imperativeInformal: Word('вотри', 4),
  imperativeFormal: Word('вотрите', 4),
  imperfect: [],
};

perfectVerbs.set(втереть.name.text, втереть);

export { втереть };