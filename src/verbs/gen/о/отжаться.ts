import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отжаться: PerfectVerb = {
  name: Word('отжаться', 3),
  singular1stPerson: Word('отожмусь', 5),
  singular2ndPerson: Word('отожмёшься', 5),
  singular3rdPerson: Word('отожмётся', 5),
  plural1stPerson: Word('отожмёмся', 5),
  plural2ndPerson: Word('отожмётесь', 5),
  plural3rdPerson: Word('отожмутся', 5),
  masculinePast: Word('отжался', 3),
  femininePast: Word('отжалась', 3),
  neuterPast: Word('отжалось', 3),
  pluralPast: Word('отжались', 3),
  imperativeInformal: Word('отожмись', 5),
  imperativeFormal: Word('отожмитесь', 5),
  imperfect: [],
};

perfectVerbs.set(отжаться.name.text, отжаться);

export { отжаться };