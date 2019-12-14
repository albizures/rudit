import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опереть: PerfectVerb = {
  name: Word('опереть', 4),
  singular1stPerson: Word('обопру', 5),
  singular2ndPerson: Word('обопрёшь', 5),
  singular3rdPerson: Word('обопрёт', 5),
  plural1stPerson: Word('обопрём', 5),
  plural2ndPerson: Word('обопрёте', 5),
  plural3rdPerson: Word('обопрут', 5),
  masculinePast: Word('опёр', 2),
  femininePast: Word('оперла', 5),
  neuterPast: Word('оперло', 5),
  pluralPast: Word('оперли', 5),
  imperativeInformal: Word('обопри', 5),
  imperativeFormal: Word('обоприте', 5),
  imperfect: [],
};

perfectVerbs.set(опереть.name.text, опереть);

export { опереть };