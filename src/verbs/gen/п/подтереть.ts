import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтереть: PerfectVerb = {
  name: Word('подтереть', 6),
  singular1stPerson: Word('подотру', 6),
  singular2ndPerson: Word('подотрёшь', 6),
  singular3rdPerson: Word('подотрёт', 6),
  plural1stPerson: Word('подотрём', 6),
  plural2ndPerson: Word('подотрёте', 6),
  plural3rdPerson: Word('подотрут', 6),
  masculinePast: Word('подтёр', 4),
  femininePast: Word('подтёрла', 4),
  neuterPast: Word('подтёрло', 4),
  pluralPast: Word('подтёрли', 4),
  imperativeInformal: Word('подотри', 6),
  imperativeFormal: Word('подотрите', 6),
  imperfect: [],
};

perfectVerbs.set(подтереть.name.text, подтереть);

export { подтереть };