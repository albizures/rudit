import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впереть: PerfectVerb = {
  name: Word('впереть', 4),
  singular1stPerson: Word('вопру', 4),
  singular2ndPerson: Word('вопрёшь', 1),
  singular3rdPerson: Word('вопрёт', 1),
  plural1stPerson: Word('вопрём', 1),
  plural2ndPerson: Word('вопрёте', 6),
  plural3rdPerson: Word('вопрут', 4),
  masculinePast: Word('впёр', 2),
  femininePast: Word('впёрла', 5),
  neuterPast: Word('впёрло', 5),
  pluralPast: Word('впёрли', 5),
  imperativeInformal: Word('вопри', 4),
  imperativeFormal: Word('воприте', 4),
  imperfect: [],
};

perfectVerbs.set(впереть.name.text, впереть);

export { впереть };