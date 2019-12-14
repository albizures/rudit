import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посоветовать: PerfectVerb = {
  name: Word('посоветовать', 5),
  singular1stPerson: Word('посоветую', 5),
  singular2ndPerson: Word('посоветуешь', 5),
  singular3rdPerson: Word('посоветует', 5),
  plural1stPerson: Word('посоветуем', 5),
  plural2ndPerson: Word('посоветуете', 5),
  plural3rdPerson: Word('посоветуют', 5),
  masculinePast: Word('посоветовал', 5),
  femininePast: Word('посоветовала', 5),
  neuterPast: Word('посоветовало', 5),
  pluralPast: Word('посоветовали', 5),
  imperativeInformal: Word('посоветуй', 5),
  imperativeFormal: Word('посоветуйте', 5),
  imperfect: ['советовать'],
};

perfectVerbs.set(посоветовать.name.text, посоветовать);

export { посоветовать };