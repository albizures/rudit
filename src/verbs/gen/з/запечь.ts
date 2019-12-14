import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запечь: PerfectVerb = {
  name: Word('запечь', 3),
  singular1stPerson: Word('запеку', 5),
  singular2ndPerson: Word('запечёшь', 5),
  singular3rdPerson: Word('запечёт', 5),
  plural1stPerson: Word('запечём', 5),
  plural2ndPerson: Word('запечёте', 5),
  plural3rdPerson: Word('запекут', 5),
  masculinePast: Word('запёк', 3),
  femininePast: Word('запекла', 6),
  neuterPast: Word('запекло', 6),
  pluralPast: Word('запекли', 6),
  imperativeInformal: Word('запеки', 5),
  imperativeFormal: Word('запеките', 5),
  imperfect: [],
};

perfectVerbs.set(запечь.name.text, запечь);

export { запечь };