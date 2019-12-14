import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ходатайствовать: PerfectVerb = {
  name: Word('ходатайствовать', 3),
  singular1stPerson: Word('ходатайствую', 3),
  singular2ndPerson: Word('ходатайствуешь', 3),
  singular3rdPerson: Word('ходатайствует', 3),
  plural1stPerson: Word('ходатайствуем', 3),
  plural2ndPerson: Word('ходатайствуете', 3),
  plural3rdPerson: Word('ходатайствуют', 3),
  masculinePast: Word('ходатайствовал', 3),
  femininePast: Word('ходатайствовала', 3),
  neuterPast: Word('ходатайствовало', 3),
  pluralPast: Word('ходатайствовали', 3),
  imperativeInformal: Word('ходатайствуй', 3),
  imperativeFormal: Word('ходатайствуйте', 3),
  imperfect: [],
};

perfectVerbs.set(ходатайствовать.name.text, ходатайствовать);

export { ходатайствовать };