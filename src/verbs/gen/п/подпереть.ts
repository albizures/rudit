import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпереть: PerfectVerb = {
  name: Word('подпереть', 6),
  singular1stPerson: Word('подопру', 6),
  singular2ndPerson: Word('подопрёшь', 6),
  singular3rdPerson: Word('подопрёт', 6),
  plural1stPerson: Word('подопрём', 6),
  plural2ndPerson: Word('подопрёте', 6),
  plural3rdPerson: Word('подопрут', 6),
  masculinePast: Word('подпёр', 4),
  femininePast: Word('подпёрла', 4),
  neuterPast: Word('подпёрло', 4),
  pluralPast: Word('подпёрли', 4),
  imperativeInformal: Word('подопри', 6),
  imperativeFormal: Word('подоприте', 6),
  imperfect: [],
};

perfectVerbs.set(подпереть.name.text, подпереть);

export { подпереть };