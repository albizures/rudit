import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспускать: PerfectVerb = {
  name: Word('приспускать', 8),
  singular1stPerson: Word('приспускаю', 8),
  singular2ndPerson: Word('приспускаешь', 8),
  singular3rdPerson: Word('приспускает', 8),
  plural1stPerson: Word('приспускаем', 8),
  plural2ndPerson: Word('приспускаете', 8),
  plural3rdPerson: Word('приспускают', 8),
  masculinePast: Word('приспускал', 8),
  femininePast: Word('приспускала', 8),
  neuterPast: Word('приспускало', 8),
  pluralPast: Word('приспускали', 8),
  imperativeInformal: Word('приспускай', 8),
  imperativeFormal: Word('приспускайте', 8),
  imperfect: [],
};

perfectVerbs.set(приспускать.name.text, приспускать);

export { приспускать };