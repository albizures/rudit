import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припереть: PerfectVerb = {
  name: Word('припереть', 6),
  singular1stPerson: Word('припру', 5),
  singular2ndPerson: Word('припрёшь', 2),
  singular3rdPerson: Word('припрёт', 2),
  plural1stPerson: Word('припрём', 2),
  plural2ndPerson: Word('припрёте', 7),
  plural3rdPerson: Word('припрут', 5),
  masculinePast: Word('припер', 4),
  femininePast: Word('приперла', 4),
  neuterPast: Word('приперло', 4),
  pluralPast: Word('приперли', 4),
  imperativeInformal: Word('припри', 5),
  imperativeFormal: Word('приприте', 5),
  imperfect: [],
};

perfectVerbs.set(припереть.name.text, припереть);

export { припереть };