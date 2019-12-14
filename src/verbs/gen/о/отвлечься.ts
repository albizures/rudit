import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвлечься: PerfectVerb = {
  name: Word('отвлечься', 4),
  singular1stPerson: Word('отвлекусь', 6),
  singular2ndPerson: Word('отвлечёшься', 4),
  singular3rdPerson: Word('отвлечётся', 4),
  plural1stPerson: Word('отвлечёмся', 4),
  plural2ndPerson: Word('отвлечётесь', 4),
  plural3rdPerson: Word('отвлекутся', 6),
  masculinePast: Word('отвлёкся', 0),
  femininePast: Word('отвлеклась', 7),
  neuterPast: Word('отвлеклось', 7),
  pluralPast: Word('отвлеклись', 7),
  imperativeInformal: Word('отвлекись', 6),
  imperativeFormal: Word('отвлекитесь', 6),
  imperfect: [],
};

perfectVerbs.set(отвлечься.name.text, отвлечься);

export { отвлечься };