import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const действовать: PerfectVerb = {
  name: Word('действовать', 1),
  singular1stPerson: Word('действую', 1),
  singular2ndPerson: Word('действуешь', 1),
  singular3rdPerson: Word('действует', 1),
  plural1stPerson: Word('действуем', 1),
  plural2ndPerson: Word('действуете', 1),
  plural3rdPerson: Word('действуют', 1),
  masculinePast: Word('действовал', 1),
  femininePast: Word('действовала', 1),
  neuterPast: Word('действовало', 1),
  pluralPast: Word('действовали', 1),
  imperativeInformal: Word('действуй', 1),
  imperativeFormal: Word('действуйте', 1),
  imperfect: [],
};

perfectVerbs.set(действовать.name.text, действовать);

export { действовать };