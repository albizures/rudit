import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отречься: PerfectVerb = {
  name: Word('отречься', 3),
  singular1stPerson: Word('отрекусь', 5),
  singular2ndPerson: Word('отречёшься', 3),
  singular3rdPerson: Word('отречётся', 3),
  plural1stPerson: Word('отречёмся', 3),
  plural2ndPerson: Word('отречётесь', 3),
  plural3rdPerson: Word('отрекутся', 5),
  masculinePast: Word('отрёкся', 0),
  femininePast: Word('отреклась', 6),
  neuterPast: Word('отреклось', 6),
  pluralPast: Word('отреклись', 6),
  imperativeInformal: Word('отрекись', 5),
  imperativeFormal: Word('отрекитесь', 5),
  imperfect: ['отрекаться'],
};

perfectVerbs.set(отречься.name.text, отречься);

export { отречься };