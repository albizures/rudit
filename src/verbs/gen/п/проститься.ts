import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проститься: PerfectVerb = {
  name: Word('проститься', 5),
  singular1stPerson: Word('прощусь', 4),
  singular2ndPerson: Word('простишься', 5),
  singular3rdPerson: Word('простится', 5),
  plural1stPerson: Word('простимся', 5),
  plural2ndPerson: Word('проститесь', 5),
  plural3rdPerson: Word('простятся', 5),
  masculinePast: Word('простился', 5),
  femininePast: Word('простилась', 5),
  neuterPast: Word('простилось', 5),
  pluralPast: Word('простились', 5),
  imperativeInformal: Word('простись', 5),
  imperativeFormal: Word('проститесь', 5),
  imperfect: [],
};

perfectVerbs.set(проститься.name.text, проститься);

export { проститься };