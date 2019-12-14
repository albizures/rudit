import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жечься: PerfectVerb = {
  name: Word('жечься', 1),
  singular1stPerson: Word('жгусь', 2),
  singular2ndPerson: Word('жжёшься', 6),
  singular3rdPerson: Word('жжётся', 5),
  plural1stPerson: Word('жжёмся', 5),
  plural2ndPerson: Word('жжётесь', 4),
  plural3rdPerson: Word('жгутся', 2),
  masculinePast: Word('жёгся', 4),
  femininePast: Word('жглась', 3),
  neuterPast: Word('жглось', 3),
  pluralPast: Word('жглись', 3),
  imperativeInformal: Word('жгись', 2),
  imperativeFormal: Word('жгитесь', 2),
  imperfect: [],
};

perfectVerbs.set(жечься.name.text, жечься);

export { жечься };