import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натереть: PerfectVerb = {
  name: Word('натереть', 5),
  singular1stPerson: Word('натру', 4),
  singular2ndPerson: Word('натрёшь', 1),
  singular3rdPerson: Word('натрёт', 1),
  plural1stPerson: Word('натрём', 1),
  plural2ndPerson: Word('натрёте', 1),
  plural3rdPerson: Word('натрут', 4),
  masculinePast: Word('натёр', 1),
  femininePast: Word('натёрла', 1),
  neuterPast: Word('натёрло', 1),
  pluralPast: Word('натёрли', 1),
  imperativeInformal: Word('натри', 4),
  imperativeFormal: Word('натрите', 4),
  imperfect: [],
};

perfectVerbs.set(натереть.name.text, натереть);

export { натереть };