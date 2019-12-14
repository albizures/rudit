import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впереть: PerfectVerb = {
  name: Word('впереть', 4),
  singular1stPerson: Word('вопру', 4),
  singular2ndPerson: Word('вопрёшь', 4),
  singular3rdPerson: Word('вопрёт', 4),
  plural1stPerson: Word('вопрём', 4),
  plural2ndPerson: Word('вопрёте', 4),
  plural3rdPerson: Word('вопрут', 4),
  masculinePast: Word('впёр', 2),
  femininePast: Word('впёрла', 2),
  neuterPast: Word('впёрло', 2),
  pluralPast: Word('впёрли', 2),
  imperativeInformal: Word('вопри', 4),
  imperativeFormal: Word('воприте', 4),
  imperfect: [],
};

perfectVerbs.set(впереть.name.text, впереть);

export { впереть };