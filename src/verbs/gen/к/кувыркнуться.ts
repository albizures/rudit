import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кувыркнуться: PerfectVerb = {
  name: Word('кувыркнуться', 7),
  singular1stPerson: Word('кувыркнусь', 7),
  singular2ndPerson: Word('кувыркнёшься', 7),
  singular3rdPerson: Word('кувыркнётся', 7),
  plural1stPerson: Word('кувыркнёмся', 7),
  plural2ndPerson: Word('кувыркнётесь', 7),
  plural3rdPerson: Word('кувыркнутся', 7),
  masculinePast: Word('кувыркнулся', 7),
  femininePast: Word('кувыркнулась', 7),
  neuterPast: Word('кувыркнулось', 7),
  pluralPast: Word('кувыркнулись', 7),
  imperativeInformal: Word('кувыркнись', 7),
  imperativeFormal: Word('кувыркнитесь', 7),
  imperfect: [],
};

perfectVerbs.set(кувыркнуться.name.text, кувыркнуться);

export { кувыркнуться };