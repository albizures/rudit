import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исходатайствовать: PerfectVerb = {
  name: Word('исходатайствовать', 5),
  singular1stPerson: Word('исходатайствую', 5),
  singular2ndPerson: Word('исходатайствуешь', 5),
  singular3rdPerson: Word('исходатайствует', 5),
  plural1stPerson: Word('исходатайствуем', 5),
  plural2ndPerson: Word('исходатайствуете', 5),
  plural3rdPerson: Word('исходатайствуют', 5),
  masculinePast: Word('исходатайствовал', 5),
  femininePast: Word('исходатайствовала', 5),
  neuterPast: Word('исходатайствовало', 5),
  pluralPast: Word('исходатайствовали', 5),
  imperativeInformal: Word('исходатайствуй', 5),
  imperativeFormal: Word('исходатайствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(исходатайствовать.name.text, исходатайствовать);

export { исходатайствовать };