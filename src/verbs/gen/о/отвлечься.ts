import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвлечься: PerfectVerb = {
  name: Word('отвлечься', 4),
  singular1stPerson: Word('отвлекусь', 6),
  singular2ndPerson: Word('отвлечёшься', 6),
  singular3rdPerson: Word('отвлечётся', 6),
  plural1stPerson: Word('отвлечёмся', 6),
  plural2ndPerson: Word('отвлечётесь', 6),
  plural3rdPerson: Word('отвлекутся', 6),
  masculinePast: Word('отвлёкся', 4),
  femininePast: Word('отвлеклась', 7),
  neuterPast: Word('отвлеклось', 7),
  pluralPast: Word('отвлеклись', 7),
  imperativeInformal: Word('отвлекись', 6),
  imperativeFormal: Word('отвлекитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отвлечься.name.text, отвлечься);

export { отвлечься };