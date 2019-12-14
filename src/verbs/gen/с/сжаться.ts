import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сжаться: PerfectVerb = {
  name: Word('сжаться', 2),
  singular1stPerson: Word('сожмусь', 4),
  singular2ndPerson: Word('сожмёшься', 1),
  singular3rdPerson: Word('сожмётся', 1),
  plural1stPerson: Word('сожмёмся', 1),
  plural2ndPerson: Word('сожмётесь', 6),
  plural3rdPerson: Word('сожмутся', 4),
  masculinePast: Word('сжался', 2),
  femininePast: Word('сжалась', 2),
  neuterPast: Word('сжалось', 2),
  pluralPast: Word('сжались', 2),
  imperativeInformal: Word('сожмись', 4),
  imperativeFormal: Word('сожмитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сжаться.name.text, сжаться);

export { сжаться };