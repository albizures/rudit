import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наименовать: PerfectVerb = {
  name: Word('наименовать', 8),
  singular1stPerson: Word('наименую', 6),
  singular2ndPerson: Word('наименуешь', 6),
  singular3rdPerson: Word('наименует', 6),
  plural1stPerson: Word('наименуем', 6),
  plural2ndPerson: Word('наименуете', 6),
  plural3rdPerson: Word('наименуют', 6),
  masculinePast: Word('наименовал', 8),
  femininePast: Word('наименовала', 8),
  neuterPast: Word('наименовало', 8),
  pluralPast: Word('наименовали', 8),
  imperativeInformal: Word('наименуй', 6),
  imperativeFormal: Word('наименуйте', 6),
  imperfect: ['именовать'],
};

perfectVerbs.set(наименовать.name.text, наименовать);

export { наименовать };