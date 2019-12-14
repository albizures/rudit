import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спечься: PerfectVerb = {
  name: Word('спечься', 2),
  singular1stPerson: Word('спекусь', 4),
  singular2ndPerson: Word('спечёшься', 2),
  singular3rdPerson: Word('спечётся', 2),
  plural1stPerson: Word('спечёмся', 2),
  plural2ndPerson: Word('спечётесь', 2),
  plural3rdPerson: Word('спекутся', 4),
  masculinePast: Word('спёкся', 5),
  femininePast: Word('спеклась', 5),
  neuterPast: Word('спеклось', 5),
  pluralPast: Word('спеклись', 5),
  imperativeInformal: Word('спекись', 4),
  imperativeFormal: Word('спекитесь', 4),
  imperfect: [],
};

perfectVerbs.set(спечься.name.text, спечься);

export { спечься };