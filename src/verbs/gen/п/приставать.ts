import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приставать: PerfectVerb = {
  name: Word('приставать', 7),
  singular1stPerson: Word('пристаю', 6),
  singular2ndPerson: Word('пристаёшь', 6),
  singular3rdPerson: Word('пристаёт', 6),
  plural1stPerson: Word('пристаём', 6),
  plural2ndPerson: Word('пристаёте', 6),
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