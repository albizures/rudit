import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приставать: PerfectVerb = {
  name: Word('приставать', 7),
  singular1stPerson: Word('пристаю', 6),
  singular2ndPerson: Word('пристаёшь', 5),
  singular3rdPerson: Word('пристаёт', 5),
  plural1stPerson: Word('пристаём', 5),
  plural2ndPerson: Word('пристаёте', 5),
  plural3rdPerson: Word('пристают', 6),
  masculinePast: Word('приставал', 7),
  femininePast: Word('приставала', 7),
  neuterPast: Word('приставало', 7),
  pluralPast: Word('приставали', 7),
  imperativeInformal: Word('приставай', 7),
  imperativeFormal: Word('приставайте', 7),
  imperfect: [],
};

perfectVerbs.set(приставать.name.text, приставать);

export { приставать };