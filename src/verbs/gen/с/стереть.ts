import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стереть: PerfectVerb = {
  name: Word('стереть', 4),
  singular1stPerson: Word('сотру', 4),
  singular2ndPerson: Word('сотрёшь', 4),
  singular3rdPerson: Word('сотрёт', 4),
  plural1stPerson: Word('сотрём', 4),
  plural2ndPerson: Word('сотрёте', 4),
  plural3rdPerson: Word('сотрут', 4),
  masculinePast: Word('стёр', 2),
  femininePast: Word('стёрла', 2),
  neuterPast: Word('стёрло', 2),
  pluralPast: Word('стёрли', 2),
  imperativeInformal: Word('сотри', 4),
  imperativeFormal: Word('сотрите', 4),
  imperfect: [],
};

perfectVerbs.set(стереть.name.text, стереть);

export { стереть };