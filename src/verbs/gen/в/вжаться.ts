import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вжаться: PerfectVerb = {
  name: Word('вжаться', 2),
  singular1stPerson: Word('вожмусь', 4),
  singular2ndPerson: Word('вожмёшься', 1),
  singular3rdPerson: Word('вожмётся', 1),
  plural1stPerson: Word('вожмёмся', 1),
  plural2ndPerson: Word('вожмётесь', 6),
  plural3rdPerson: Word('вожмутся', 4),
  masculinePast: Word('вжался', 2),
  femininePast: Word('вжалась', 2),
  neuterPast: Word('вжалось', 2),
  pluralPast: Word('вжались', 2),
  imperativeInformal: Word('вожмись', 4),
  imperativeFormal: Word('вожмитесь', 4),
  imperfect: [],
};

perfectVerbs.set(вжаться.name.text, вжаться);

export { вжаться };