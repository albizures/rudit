import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уставать: PerfectVerb = {
  name: Word('уставать', 5),
  singular1stPerson: Word('устаю', 4),
  singular2ndPerson: Word('устаёшь', 3),
  singular3rdPerson: Word('устаёт', 3),
  plural1stPerson: Word('устаём', 3),
  plural2ndPerson: Word('устаёте', 3),
  plural3rdPerson: Word('устают', 4),
  masculinePast: Word('уставал', 5),
  femininePast: Word('уставала', 5),
  neuterPast: Word('уставало', 5),
  pluralPast: Word('уставали', 5),
  imperativeInformal: Word('уставай', 5),
  imperativeFormal: Word('уставайте', 5),
  imperfect: ['устать'],
};

perfectVerbs.set(уставать.name.text, уставать);

export { уставать };