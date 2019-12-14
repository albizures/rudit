import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зажечься: PerfectVerb = {
  name: Word('зажечься', 3),
  singular1stPerson: Word('зажгусь', 4),
  singular2ndPerson: Word('зажжёшься', 1),
  singular3rdPerson: Word('зажжётся', 1),
  plural1stPerson: Word('зажжёмся', 1),
  plural2ndPerson: Word('зажжётесь', 1),
  plural3rdPerson: Word('зажгутся', 4),
  masculinePast: Word('зажёгся', 1),
  femininePast: Word('зажглась', 5),
  neuterPast: Word('зажглось', 5),
  pluralPast: Word('зажглись', 5),
  imperativeInformal: Word('зажгись', 4),
  imperativeFormal: Word('зажгитесь', 4),
  imperfect: [],
};

perfectVerbs.set(зажечься.name.text, зажечься);

export { зажечься };