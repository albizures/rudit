import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растечься: PerfectVerb = {
  name: Word('растечься', 4),
  singular1stPerson: Word('растекусь', 6),
  singular2ndPerson: Word('растечёшься', 1),
  singular3rdPerson: Word('растечётся', 1),
  plural1stPerson: Word('растечёмся', 1),
  plural2ndPerson: Word('растечётесь', 1),
  plural3rdPerson: Word('растекутся', 6),
  masculinePast: Word('растёкся', 1),
  femininePast: Word('растеклась', 7),
  neuterPast: Word('растеклось', 7),
  pluralPast: Word('растеклись', 7),
  imperativeInformal: Word('растекись', 6),
  imperativeFormal: Word('растекитесь', 6),
  imperfect: [],
};

perfectVerbs.set(растечься.name.text, растечься);

export { растечься };