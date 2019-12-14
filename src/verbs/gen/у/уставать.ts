import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уставать: PerfectVerb = {
  name: Word('уставать', 5),
  singular1stPerson: Word('устаю', 4),
  singular2ndPerson: Word('устаёшь', 4),
  singular3rdPerson: Word('устаёт', 4),
  plural1stPerson: Word('устаём', 4),
  plural2ndPerson: Word('устаёте', 4),
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