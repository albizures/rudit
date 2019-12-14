import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засмеять: PerfectVerb = {
  name: Word('засмеять', 5),
  singular1stPerson: Word('засмею', 5),
  singular2ndPerson: Word('засмеёшь', 1),
  singular3rdPerson: Word('засмеёт', 1),
  plural1stPerson: Word('засмеём', 1),
  plural2ndPerson: Word('засмеёте', 1),
  plural3rdPerson: Word('засмеют', 5),
  masculinePast: Word('засмеял', 5),
  femininePast: Word('засмеяла', 5),
  neuterPast: Word('засмеяло', 5),
  pluralPast: Word('засмеяли', 5),
  imperativeInformal: Word('засмей', 4),
  imperativeFormal: Word('засмейте', 4),
  imperfect: [],
};

perfectVerbs.set(засмеять.name.text, засмеять);

export { засмеять };