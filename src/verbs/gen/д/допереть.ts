import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допереть: PerfectVerb = {
  name: Word('допереть', 5),
  singular1stPerson: Word('допру', 4),
  singular2ndPerson: Word('допрёшь', 4),
  singular3rdPerson: Word('допрёт', 4),
  plural1stPerson: Word('допрём', 4),
  plural2ndPerson: Word('допрёте', 4),
  plural3rdPerson: Word('допрут', 4),
  masculinePast: Word('допёр', 3),
  femininePast: Word('допёрла', 3),
  neuterPast: Word('допёрло', 3),
  pluralPast: Word('допёрли', 3),
  imperativeInformal: Word('допри', 4),
  imperativeFormal: Word('доприте', 4),
  imperfect: [],
};

perfectVerbs.set(допереть.name.text, допереть);

export { допереть };