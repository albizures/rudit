import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приплетать: PerfectVerb = {
  name: Word('приплетать', 7),
  singular1stPerson: Word('приплетаю', 7),
  singular2ndPerson: Word('приплетаешь', 7),
  singular3rdPerson: Word('приплетает', 7),
  plural1stPerson: Word('приплетаем', 7),
  plural2ndPerson: Word('приплетаете', 7),
  plural3rdPerson: Word('приплетают', 7),
  masculinePast: Word('приплетал', 7),
  femininePast: Word('приплетала', 7),
  neuterPast: Word('приплетало', 7),
  pluralPast: Word('приплетали', 7),
  imperativeInformal: Word('приплетай', 7),
  imperativeFormal: Word('приплетайте', 7),
  imperfect: [],
};

perfectVerbs.set(приплетать.name.text, приплетать);

export { приплетать };