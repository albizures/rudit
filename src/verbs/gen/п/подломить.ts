import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подломить: PerfectVerb = {
  name: Word('подломить', 6),
  singular1stPerson: Word('подломлю', 7),
  singular2ndPerson: Word('подломишь', 4),
  singular3rdPerson: Word('подломит', 4),
  plural1stPerson: Word('подломим', 4),
  plural2ndPerson: Word('подломите', 4),
  plural3rdPerson: Word('подломят', 4),
  masculinePast: Word('подломил', 6),
  femininePast: Word('подломила', 6),
  neuterPast: Word('подломило', 6),
  pluralPast: Word('подломили', 6),
  imperativeInformal: Word('подломи', 6),
  imperativeFormal: Word('подломите', 6),
  imperfect: [],
};

perfectVerbs.set(подломить.name.text, подломить);

export { подломить };