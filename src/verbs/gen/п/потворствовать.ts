import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потворствовать: PerfectVerb = {
  name: Word('потворствовать', 4),
  singular1stPerson: Word('потворствую', 4),
  singular2ndPerson: Word('потворствуешь', 4),
  singular3rdPerson: Word('потворствует', 4),
  plural1stPerson: Word('потворствуем', 4),
  plural2ndPerson: Word('потворствуете', 4),
  plural3rdPerson: Word('потворствуют', 4),
  masculinePast: Word('потворствовал', 4),
  femininePast: Word('потворствовала', 4),
  neuterPast: Word('потворствовало', 4),
  pluralPast: Word('потворствовали', 4),
  imperativeInformal: Word('потворствуй', 4),
  imperativeFormal: Word('потворствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(потворствовать.name.text, потворствовать);

export { потворствовать };