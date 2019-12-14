import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спереть: PerfectVerb = {
  name: Word('спереть', 4),
  singular1stPerson: Word('сопру', 4),
  singular2ndPerson: Word('сопрёшь', 4),
  singular3rdPerson: Word('сопрёт', 4),
  plural1stPerson: Word('сопрём', 4),
  plural2ndPerson: Word('сопрёте', 4),
  plural3rdPerson: Word('сопрут', 4),
  masculinePast: Word('спёр', 2),
  femininePast: Word('спёрла', 2),
  neuterPast: Word('спёрло', 2),
  pluralPast: Word('спёрли', 2),
  imperativeInformal: Word('сопри', 4),
  imperativeFormal: Word('соприте', 4),
  imperfect: [],
};

perfectVerbs.set(спереть.name.text, спереть);

export { спереть };