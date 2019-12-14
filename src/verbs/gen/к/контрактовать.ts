import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const контрактовать: PerfectVerb = {
  name: Word('контрактовать', 10),
  singular1stPerson: Word('контрактую', 8),
  singular2ndPerson: Word('контрактуешь', 8),
  singular3rdPerson: Word('контрактует', 8),
  plural1stPerson: Word('контрактуем', 8),
  plural2ndPerson: Word('контрактуете', 8),
  plural3rdPerson: Word('контрактуют', 8),
  masculinePast: Word('контрактовал', 10),
  femininePast: Word('контрактовала', 10),
  neuterPast: Word('контрактовало', 10),
  pluralPast: Word('контрактовали', 10),
  imperativeInformal: Word('контрактуй', 8),
  imperativeFormal: Word('контрактуйте', 8),
  imperfect: [],
};

perfectVerbs.set(контрактовать.name.text, контрактовать);

export { контрактовать };