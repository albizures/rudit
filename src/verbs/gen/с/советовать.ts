import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const советовать: PerfectVerb = {
  name: Word('советовать', 3),
  singular1stPerson: Word('советую', 3),
  singular2ndPerson: Word('советуешь', 3),
  singular3rdPerson: Word('советует', 3),
  plural1stPerson: Word('советуем', 3),
  plural2ndPerson: Word('советуете', 3),
  plural3rdPerson: Word('советуют', 3),
  masculinePast: Word('советовал', 3),
  femininePast: Word('советовала', 3),
  neuterPast: Word('советовало', 3),
  pluralPast: Word('советовали', 3),
  imperativeInformal: Word('советуй', 3),
  imperativeFormal: Word('советуйте', 3),
  imperfect: ['посоветовать'],
};

perfectVerbs.set(советовать.name.text, советовать);

export { советовать };