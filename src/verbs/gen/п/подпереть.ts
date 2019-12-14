import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подпереть: PerfectVerb = {
  name: Word('подпереть', 6),
  singular1stPerson: Word('подопру', 6),
  singular2ndPerson: Word('подопрёшь', 1),
  singular3rdPerson: Word('подопрёт', 1),
  plural1stPerson: Word('подопрём', 1),
  plural2ndPerson: Word('подопрёте', 8),
  plural3rdPerson: Word('подопрут', 6),
  masculinePast: Word('подпёр', 1),
  femininePast: Word('подпёрла', 7),
  neuterPast: Word('подпёрло', 1),
  pluralPast: Word('подпёрли', 7),
  imperativeInformal: Word('подопри', 6),
  imperativeFormal: Word('подоприте', 6),
  imperfect: [],
};

perfectVerbs.set(подпереть.name.text, подпереть);

export { подпереть };