import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжаться: PerfectVerb = {
  name: Word('обжаться', 3),
  singular1stPerson: Word('обожмусь', 5),
  singular2ndPerson: Word('обожмёшься', 5),
  singular3rdPerson: Word('обожмётся', 5),
  plural1stPerson: Word('обожмёмся', 5),
  plural2ndPerson: Word('обожмётесь', 5),
  plural3rdPerson: Word('обожмутся', 5),
  masculinePast: Word('обжался', 3),
  femininePast: Word('обжалась', 3),
  neuterPast: Word('обжалось', 3),
  pluralPast: Word('обжались', 3),
  imperativeInformal: Word('обожмись', 5),
  imperativeFormal: Word('обожмитесь', 5),
  imperfect: [],
};

perfectVerbs.set(обжаться.name.text, обжаться);

export { обжаться };