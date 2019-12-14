import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нормализовать: PerfectVerb = {
  name: Word('нормализовать', 10),
  singular1stPerson: Word('нормализую', 8),
  singular2ndPerson: Word('нормализуешь', 8),
  singular3rdPerson: Word('нормализует', 8),
  plural1stPerson: Word('нормализуем', 8),
  plural2ndPerson: Word('нормализуете', 8),
  plural3rdPerson: Word('нормализуют', 8),
  masculinePast: Word('нормализовал', 10),
  femininePast: Word('нормализовала', 10),
  neuterPast: Word('нормализовало', 10),
  pluralPast: Word('нормализовали', 10),
  imperativeInformal: Word('нормализуй', 8),
  imperativeFormal: Word('нормализуйте', 8),
  imperfect: [],
};

perfectVerbs.set(нормализовать.name.text, нормализовать);

export { нормализовать };