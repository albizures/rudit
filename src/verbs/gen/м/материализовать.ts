import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const материализовать: PerfectVerb = {
  name: Word('материализовать', 12),
  singular1stPerson: Word('материализую', 10),
  singular2ndPerson: Word('материализуешь', 10),
  singular3rdPerson: Word('материализует', 10),
  plural1stPerson: Word('материализуем', 10),
  plural2ndPerson: Word('материализуете', 10),
  plural3rdPerson: Word('материализуют', 10),
  masculinePast: Word('материализовал', 12),
  femininePast: Word('материализовала', 12),
  neuterPast: Word('материализовало', 12),
  pluralPast: Word('материализовали', 12),
  imperativeInformal: Word('материализуй', 10),
  imperativeFormal: Word('материализуйте', 10),
  imperfect: [],
};

perfectVerbs.set(материализовать.name.text, материализовать);

export { материализовать };