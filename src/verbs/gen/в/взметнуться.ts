import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взметнуться: PerfectVerb = {
  name: Word('взметнуться', 6),
  singular1stPerson: Word('взметнусь', 6),
  singular2ndPerson: Word('взметнёшься', 6),
  singular3rdPerson: Word('взметнётся', 6),
  plural1stPerson: Word('взметнёмся', 6),
  plural2ndPerson: Word('взметнётесь', 6),
  plural3rdPerson: Word('взметнутся', 6),
  masculinePast: Word('взметнулся', 6),
  femininePast: Word('взметнулась', 6),
  neuterPast: Word('взметнулось', 6),
  pluralPast: Word('взметнулись', 6),
  imperativeInformal: Word('взметнись', 6),
  imperativeFormal: Word('взметнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(взметнуться.name.text, взметнуться);

export { взметнуться };