import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запереть: PerfectVerb = {
  name: Word('запереть', 5),
  singular1stPerson: Word('запру', 4),
  singular2ndPerson: Word('запрёшь', 1),
  singular3rdPerson: Word('запрёт', 1),
  plural1stPerson: Word('запрём', 1),
  plural2ndPerson: Word('запрёте', 1),
  plural3rdPerson: Word('запрут', 4),
  masculinePast: Word('запер', 1),
  femininePast: Word('заперла', 1),
  neuterPast: Word('заперло', 1),
  pluralPast: Word('заперли', 1),
  imperativeInformal: Word('запри', 4),
  imperativeFormal: Word('заприте', 4),
  imperfect: ['запирать'],
};

perfectVerbs.set(запереть.name.text, запереть);

export { запереть };