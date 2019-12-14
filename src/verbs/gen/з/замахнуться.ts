import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замахнуться: PerfectVerb = {
  name: Word('замахнуться', 6),
  singular1stPerson: Word('замахнусь', 6),
  singular2ndPerson: Word('замахнёшься', 6),
  singular3rdPerson: Word('замахнётся', 6),
  plural1stPerson: Word('замахнёмся', 6),
  plural2ndPerson: Word('замахнётесь', 6),
  plural3rdPerson: Word('замахнутся', 6),
  masculinePast: Word('замахнулся', 6),
  femininePast: Word('замахнулась', 6),
  neuterPast: Word('замахнулось', 6),
  pluralPast: Word('замахнулись', 6),
  imperativeInformal: Word('замахнись', 6),
  imperativeFormal: Word('замахнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(замахнуться.name.text, замахнуться);

export { замахнуться };