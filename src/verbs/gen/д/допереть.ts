import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допереть: PerfectVerb = {
  name: Word('допереть', 5),
  singular1stPerson: Word('допру', 4),
  singular2ndPerson: Word('допрёшь', 1),
  singular3rdPerson: Word('допрёт', 1),
  plural1stPerson: Word('допрём', 1),
  plural2ndPerson: Word('допрёте', 6),
  plural3rdPerson: Word('допрут', 4),
  masculinePast: Word('допёр', 1),
  femininePast: Word('допёрла', 6),
  neuterPast: Word('допёрло', 1),
  pluralPast: Word('допёрли', 6),
  imperativeInformal: Word('допри', 4),
  imperativeFormal: Word('доприте', 4),
  imperfect: [],
};

perfectVerbs.set(допереть.name.text, допереть);

export { допереть };