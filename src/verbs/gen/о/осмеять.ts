import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмеять: PerfectVerb = {
  name: Word('осмеять', 4),
  singular1stPerson: Word('осмею', 4),
  singular2ndPerson: Word('осмеёшь', 4),
  singular3rdPerson: Word('осмеёт', 4),
  plural1stPerson: Word('осмеём', 4),
  plural2ndPerson: Word('осмеёте', 4),
  plural3rdPerson: Word('осмеют', 4),
  masculinePast: Word('осмеял', 4),
  femininePast: Word('осмеяла', 4),
  neuterPast: Word('осмеяло', 4),
  pluralPast: Word('осмеяли', 4),
  imperativeInformal: Word('осмей', 3),
  imperativeFormal: Word('осмейте', 3),
  imperfect: [],
};

perfectVerbs.set(осмеять.name.text, осмеять);

export { осмеять };