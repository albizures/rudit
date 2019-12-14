import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затереть: PerfectVerb = {
  name: Word('затереть', 5),
  singular1stPerson: Word('затру', 4),
  singular2ndPerson: Word('затрёшь', 1),
  singular3rdPerson: Word('затрёт', 1),
  plural1stPerson: Word('затрём', 1),
  plural2ndPerson: Word('затрёте', 1),
  plural3rdPerson: Word('затрут', 4),
  masculinePast: Word('затёр', 1),
  femininePast: Word('затёрла', 1),
  neuterPast: Word('затёрло', 1),
  pluralPast: Word('затёрли', 1),
  imperativeInformal: Word('затри', 4),
  imperativeFormal: Word('затрите', 4),
  imperfect: [],
};

perfectVerbs.set(затереть.name.text, затереть);

export { затереть };