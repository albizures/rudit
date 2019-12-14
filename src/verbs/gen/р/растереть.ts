import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растереть: PerfectVerb = {
  name: Word('растереть', 6),
  singular1stPerson: Word('разотру', 6),
  singular2ndPerson: Word('разотрёшь', 6),
  singular3rdPerson: Word('разотрёт', 6),
  plural1stPerson: Word('разотрём', 6),
  plural2ndPerson: Word('разотрёте', 6),
  plural3rdPerson: Word('разотрут', 6),
  masculinePast: Word('растёр', 4),
  femininePast: Word('растёрла', 4),
  neuterPast: Word('растёрло', 4),
  pluralPast: Word('растёрли', 4),
  imperativeInformal: Word('разотри', 6),
  imperativeFormal: Word('разотрите', 6),
  imperfect: [],
};

perfectVerbs.set(растереть.name.text, растереть);

export { растереть };