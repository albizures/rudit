import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растереть: PerfectVerb = {
  name: Word('растереть', 6),
  singular1stPerson: Word('разотру', 6),
  singular2ndPerson: Word('разотрёшь', 1),
  singular3rdPerson: Word('разотрёт', 1),
  plural1stPerson: Word('разотрём', 1),
  plural2ndPerson: Word('разотрёте', 1),
  plural3rdPerson: Word('разотрут', 6),
  masculinePast: Word('растёр', 1),
  femininePast: Word('растёрла', 1),
  neuterPast: Word('растёрло', 1),
  pluralPast: Word('растёрли', 1),
  imperativeInformal: Word('разотри', 6),
  imperativeFormal: Word('разотрите', 6),
  imperfect: [],
};

perfectVerbs.set(растереть.name.text, растереть);

export { растереть };