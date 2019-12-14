import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подписаться: PerfectVerb = {
  name: Word('подписаться', 6),
  singular1stPerson: Word('подпишусь', 6),
  singular2ndPerson: Word('подпишешься', 4),
  singular3rdPerson: Word('подпишется', 4),
  plural1stPerson: Word('подпишемся', 4),
  plural2ndPerson: Word('подпишетесь', 4),
  plural3rdPerson: Word('подпишутся', 4),
  masculinePast: Word('подписался', 6),
  femininePast: Word('подписалась', 6),
  neuterPast: Word('подписалось', 6),
  pluralPast: Word('подписались', 6),
  imperativeInformal: Word('подпишись', 6),
  imperativeFormal: Word('подпишитесь', 6),
  imperfect: ['подписываться'],
};

perfectVerbs.set(подписаться.name.text, подписаться);

export { подписаться };