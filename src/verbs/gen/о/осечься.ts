import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осечься: PerfectVerb = {
  name: Word('осечься', 2),
  singular1stPerson: Word('осекусь', 4),
  singular2ndPerson: Word('осечёшься', 4),
  singular3rdPerson: Word('осечётся', 4),
  plural1stPerson: Word('осечёмся', 4),
  plural2ndPerson: Word('осечётесь', 4),
  plural3rdPerson: Word('осекутся', 4),
  masculinePast: Word('осёкся', 2),
  femininePast: Word('осеклась', 5),
  neuterPast: Word('осеклось', 5),
  pluralPast: Word('осеклись', 5),
  imperativeInformal: Word('осекись', 4),
  imperativeFormal: Word('осекитесь', 4),
  imperfect: [],
};

perfectVerbs.set(осечься.name.text, осечься);

export { осечься };