import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оштрафовать: PerfectVerb = {
  name: Word('оштрафовать', 8),
  singular1stPerson: Word('оштрафую', 6),
  singular2ndPerson: Word('оштрафуешь', 6),
  singular3rdPerson: Word('оштрафует', 6),
  plural1stPerson: Word('оштрафуем', 6),
  plural2ndPerson: Word('оштрафуете', 6),
  plural3rdPerson: Word('оштрафуют', 6),
  masculinePast: Word('оштрафовал', 8),
  femininePast: Word('оштрафовала', 8),
  neuterPast: Word('оштрафовало', 8),
  pluralPast: Word('оштрафовали', 8),
  imperativeInformal: Word('оштрафуй', 6),
  imperativeFormal: Word('оштрафуйте', 6),
  imperfect: ['штрафовать'],
};

perfectVerbs.set(оштрафовать.name.text, оштрафовать);

export { оштрафовать };