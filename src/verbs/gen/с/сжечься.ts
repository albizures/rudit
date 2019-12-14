import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжечься: PerfectVerb = {
  name: Word('сжечься', 2),
  singular1stPerson: Word('сожгусь', 4),
  singular2ndPerson: Word('сожжёшься', 4),
  singular3rdPerson: Word('сожжётся', 4),
  plural1stPerson: Word('сожжёмся', 4),
  plural2ndPerson: Word('сожжётесь', 4),
  plural3rdPerson: Word('сожгутся', 4),
  masculinePast: Word('сжёгся', 2),
  femininePast: Word('сожглась', 5),
  neuterPast: Word('сожглось', 5),
  pluralPast: Word('сожглись', 5),
  imperativeInformal: Word('сожгись', 4),
  imperativeFormal: Word('сожгитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сжечься.name.text, сжечься);

export { сжечься };