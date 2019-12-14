import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спечься: PerfectVerb = {
  name: Word('спечься', 2),
  singular1stPerson: Word('спекусь', 4),
  singular2ndPerson: Word('спечёшься', 4),
  singular3rdPerson: Word('спечётся', 4),
  plural1stPerson: Word('спечёмся', 4),
  plural2ndPerson: Word('спечётесь', 4),
  plural3rdPerson: Word('спекутся', 4),
  masculinePast: Word('спёкся', 2),
  femininePast: Word('спеклась', 5),
  neuterPast: Word('спеклось', 5),
  pluralPast: Word('спеклись', 5),
  imperativeInformal: Word('спекись', 4),
  imperativeFormal: Word('спекитесь', 4),
  imperfect: [],
};

perfectVerbs.set(спечься.name.text, спечься);

export { спечься };