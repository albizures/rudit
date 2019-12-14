import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мереть: PerfectVerb = {
  name: Word('мереть', 3),
  singular1stPerson: Word('мру', 2),
  singular2ndPerson: Word('мрёшь', 2),
  singular3rdPerson: Word('мрёт', 2),
  plural1stPerson: Word('мрём', 2),
  plural2ndPerson: Word('мрёте', 2),
  plural3rdPerson: Word('мрут', 2),
  masculinePast: Word('мёр', 1),
  femininePast: Word('мёрла', 1),
  neuterPast: Word('мёрло', 1),
  pluralPast: Word('мёрли', 1),
  imperativeInformal: Word('мри', 2),
  imperativeFormal: Word('мрите', 2),
  imperfect: [],
};

perfectVerbs.set(мереть.name.text, мереть);

export { мереть };