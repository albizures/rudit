import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скомандовать: PerfectVerb = {
  name: Word('скомандовать', 4),
  singular1stPerson: Word('скомандую', 4),
  singular2ndPerson: Word('скомандуешь', 4),
  singular3rdPerson: Word('скомандует', 4),
  plural1stPerson: Word('скомандуем', 4),
  plural2ndPerson: Word('скомандуете', 4),
  plural3rdPerson: Word('скомандуют', 4),
  masculinePast: Word('скомандовал', 4),
  femininePast: Word('скомандовала', 4),
  neuterPast: Word('скомандовало', 4),
  pluralPast: Word('скомандовали', 4),
  imperativeInformal: Word('скомандуй', 4),
  imperativeFormal: Word('скомандуйте', 4),
  imperfect: [],
};

perfectVerbs.set(скомандовать.name.text, скомандовать);

export { скомандовать };