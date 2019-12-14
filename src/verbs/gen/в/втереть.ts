import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const втереть: PerfectVerb = {
  name: Word('втереть', 4),
  singular1stPerson: Word('вотру', 4),
  singular2ndPerson: Word('вотрёшь', 4),
  singular3rdPerson: Word('вотрёт', 4),
  plural1stPerson: Word('вотрём', 4),
  plural2ndPerson: Word('вотрёте', 4),
  plural3rdPerson: Word('вотрут', 4),
  masculinePast: Word('втёр', 2),
  femininePast: Word('втёрла', 2),
  neuterPast: Word('втёрло', 2),
  pluralPast: Word('втёрли', 2),
  imperativeInformal: Word('вотри', 4),
  imperativeFormal: Word('вотрите', 4),
  imperfect: [],
};

perfectVerbs.set(втереть.name.text, втереть);

export { втереть };