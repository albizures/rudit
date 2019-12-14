import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжаться: PerfectVerb = {
  name: Word('разжаться', 4),
  singular1stPerson: Word('разожмусь', 6),
  singular2ndPerson: Word('разожмёшься', 1),
  singular3rdPerson: Word('разожмётся', 1),
  plural1stPerson: Word('разожмёмся', 1),
  plural2ndPerson: Word('разожмётесь', 1),
  plural3rdPerson: Word('разожмутся', 6),
  masculinePast: Word('разжался', 4),
  femininePast: Word('разжалась', 4),
  neuterPast: Word('разжалось', 4),
  pluralPast: Word('разжались', 4),
  imperativeInformal: Word('разожмись', 6),
  imperativeFormal: Word('разожмитесь', 6),
  imperfect: [],
};

perfectVerbs.set(разжаться.name.text, разжаться);

export { разжаться };