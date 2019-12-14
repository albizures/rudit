import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чередовать: PerfectVerb = {
  name: Word('чередовать', 7),
  singular1stPerson: Word('чередую', 5),
  singular2ndPerson: Word('чередуешь', 5),
  singular3rdPerson: Word('чередует', 5),
  plural1stPerson: Word('чередуем', 5),
  plural2ndPerson: Word('чередуете', 5),
  plural3rdPerson: Word('чередуют', 5),
  masculinePast: Word('чередовал', 7),
  femininePast: Word('чередовала', 7),
  neuterPast: Word('чередовало', 7),
  pluralPast: Word('чередовали', 7),
  imperativeInformal: Word('чередуй', 5),
  imperativeFormal: Word('чередуйте', 5),
  imperfect: [],
};

perfectVerbs.set(чередовать.name.text, чередовать);

export { чередовать };