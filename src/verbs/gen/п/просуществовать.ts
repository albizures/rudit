import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просуществовать: PerfectVerb = {
  name: Word('просуществовать', 12),
  singular1stPerson: Word('просуществую', 10),
  singular2ndPerson: Word('просуществуешь', 10),
  singular3rdPerson: Word('просуществует', 10),
  plural1stPerson: Word('просуществуем', 10),
  plural2ndPerson: Word('просуществуете', 10),
  plural3rdPerson: Word('просуществуют', 10),
  masculinePast: Word('просуществовал', 12),
  femininePast: Word('просуществовала', 12),
  neuterPast: Word('просуществовало', 12),
  pluralPast: Word('просуществовали', 12),
  imperativeInformal: Word('просуществуй', 10),
  imperativeFormal: Word('просуществуйте', 10),
  imperfect: [],
};

perfectVerbs.set(просуществовать.name.text, просуществовать);

export { просуществовать };