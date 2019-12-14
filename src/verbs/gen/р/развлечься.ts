import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развлечься: PerfectVerb = {
  name: Word('развлечься', 5),
  singular1stPerson: Word('развлекусь', 7),
  singular2ndPerson: Word('развлечёшься', 7),
  singular3rdPerson: Word('развлечётся', 7),
  plural1stPerson: Word('развлечёмся', 7),
  plural2ndPerson: Word('развлечётесь', 7),
  plural3rdPerson: Word('развлекутся', 7),
  masculinePast: Word('развлёкся', 5),
  femininePast: Word('развлеклась', 8),
  neuterPast: Word('развлеклось', 8),
  pluralPast: Word('развлеклись', 8),
  imperativeInformal: Word('развлекись', 7),
  imperativeFormal: Word('развлекитесь', 7),
  imperfect: [],
};

perfectVerbs.set(развлечься.name.text, развлечься);

export { развлечься };