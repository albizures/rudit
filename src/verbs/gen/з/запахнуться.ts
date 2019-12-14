import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запахнуться: PerfectVerb = {
  name: Word('запахнуться', 6),
  singular1stPerson: Word('запахнусь', 6),
  singular2ndPerson: Word('запахнёшься', 6),
  singular3rdPerson: Word('запахнётся', 6),
  plural1stPerson: Word('запахнёмся', 6),
  plural2ndPerson: Word('запахнётесь', 6),
  plural3rdPerson: Word('запахнутся', 6),
  masculinePast: Word('запахнулся', 6),
  femininePast: Word('запахнулась', 6),
  neuterPast: Word('запахнулось', 6),
  pluralPast: Word('запахнулись', 6),
  imperativeInformal: Word('запахнись', 6),
  imperativeFormal: Word('запахнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(запахнуться.name.text, запахнуться);

export { запахнуться };