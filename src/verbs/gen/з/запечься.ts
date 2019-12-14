import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запечься: PerfectVerb = {
  name: Word('запечься', 3),
  singular1stPerson: Word('запекусь', 5),
  singular2ndPerson: Word('запечёшься', 5),
  singular3rdPerson: Word('запечётся', 5),
  plural1stPerson: Word('запечёмся', 5),
  plural2ndPerson: Word('запечётесь', 5),
  plural3rdPerson: Word('запекутся', 5),
  masculinePast: Word('запёкся', 3),
  femininePast: Word('запеклась', 6),
  neuterPast: Word('запеклось', 6),
  pluralPast: Word('запеклись', 6),
  imperativeInformal: Word('запекись', 5),
  imperativeFormal: Word('запекитесь', 5),
  imperfect: [],
};

perfectVerbs.set(запечься.name.text, запечься);

export { запечься };