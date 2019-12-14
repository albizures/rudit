import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const клеваться: PerfectVerb = {
  name: Word('клеваться', 4),
  singular1stPerson: Word('клююсь', 3),
  singular2ndPerson: Word('клюёшься', 3),
  singular3rdPerson: Word('клюётся', 3),
  plural1stPerson: Word('клюёмся', 3),
  plural2ndPerson: Word('клюётесь', 3),
  plural3rdPerson: Word('клюются', 3),
  masculinePast: Word('клевался', 4),
  femininePast: Word('клевалась', 4),
  neuterPast: Word('клевалось', 4),
  pluralPast: Word('клевались', 4),
  imperativeInformal: Word('клюйся', 2),
  imperativeFormal: Word('клюйтесь', 2),
  imperfect: [],
};

perfectVerbs.set(клеваться.name.text, клеваться);

export { клеваться };