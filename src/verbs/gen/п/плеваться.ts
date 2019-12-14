import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const плеваться: PerfectVerb = {
  name: Word('плеваться', 4),
  singular1stPerson: Word('плююсь', 3),
  singular2ndPerson: Word('плюёшься', 3),
  singular3rdPerson: Word('плюётся', 3),
  plural1stPerson: Word('плюёмся', 3),
  plural2ndPerson: Word('плюётесь', 3),
  plural3rdPerson: Word('плюются', 3),
  masculinePast: Word('плевался', 4),
  femininePast: Word('плевалась', 4),
  neuterPast: Word('плевалось', 4),
  pluralPast: Word('плевались', 4),
  imperativeInformal: Word('плюйся', 2),
  imperativeFormal: Word('плюйтесь', 2),
  imperfect: [],
};

perfectVerbs.set(плеваться.name.text, плеваться);

export { плеваться };