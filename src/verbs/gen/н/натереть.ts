import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натереть: PerfectVerb = {
  name: Word('натереть', 5),
  singular1stPerson: Word('натру', 4),
  singular2ndPerson: Word('натрёшь', 4),
  singular3rdPerson: Word('натрёт', 4),
  plural1stPerson: Word('натрём', 4),
  plural2ndPerson: Word('натрёте', 4),
  plural3rdPerson: Word('натрут', 4),
  masculinePast: Word('натёр', 3),
  femininePast: Word('натёрла', 3),
  neuterPast: Word('натёрло', 3),
  pluralPast: Word('натёрли', 3),
  imperativeInformal: Word('натри', 4),
  imperativeFormal: Word('натрите', 4),
  imperfect: [],
};

perfectVerbs.set(натереть.name.text, натереть);

export { натереть };