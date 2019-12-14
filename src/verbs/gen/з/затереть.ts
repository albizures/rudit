import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затереть: PerfectVerb = {
  name: Word('затереть', 5),
  singular1stPerson: Word('затру', 4),
  singular2ndPerson: Word('затрёшь', 4),
  singular3rdPerson: Word('затрёт', 4),
  plural1stPerson: Word('затрём', 4),
  plural2ndPerson: Word('затрёте', 4),
  plural3rdPerson: Word('затрут', 4),
  masculinePast: Word('затёр', 3),
  femininePast: Word('затёрла', 3),
  neuterPast: Word('затёрло', 3),
  pluralPast: Word('затёрли', 3),
  imperativeInformal: Word('затри', 4),
  imperativeFormal: Word('затрите', 4),
  imperfect: [],
};

perfectVerbs.set(затереть.name.text, затереть);

export { затереть };