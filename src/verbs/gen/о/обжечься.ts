import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжечься: PerfectVerb = {
  name: Word('обжечься', 3),
  singular1stPerson: Word('обожгусь', 5),
  singular2ndPerson: Word('обожжёшься', 5),
  singular3rdPerson: Word('обожжётся', 5),
  plural1stPerson: Word('обожжёмся', 5),
  plural2ndPerson: Word('обожжётесь', 5),
  plural3rdPerson: Word('обожгутся', 5),
  masculinePast: Word('обжёгся', 3),
  femininePast: Word('обожглась', 6),
  neuterPast: Word('обожглось', 6),
  pluralPast: Word('обожглись', 6),
  imperativeInformal: Word('обожгись', 5),
  imperativeFormal: Word('обожгитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обжечься.name.text, обжечься);

export { обжечься };