import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подтереть: PerfectVerb = {
  name: Word('подтереть', 6),
  singular1stPerson: Word('подотру', 6),
  singular2ndPerson: Word('подотрёшь', 1),
  singular3rdPerson: Word('подотрёт', 1),
  plural1stPerson: Word('подотрём', 1),
  plural2ndPerson: Word('подотрёте', 8),
  plural3rdPerson: Word('подотрут', 6),
  masculinePast: Word('подтёр', 1),
  femininePast: Word('подтёрла', 7),
  neuterPast: Word('подтёрло', 1),
  pluralPast: Word('подтёрли', 7),
  imperativeInformal: Word('подотри', 6),
  imperativeFormal: Word('подотрите', 6),
  imperfect: [],
};

perfectVerbs.set(подтереть.name.text, подтереть);

export { подтереть };