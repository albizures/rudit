import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предаваться: PerfectVerb = {
  name: Word('предаваться', 6),
  singular1stPerson: Word('предаюсь', 5),
  singular2ndPerson: Word('предаёшься', 4),
  singular3rdPerson: Word('предаётся', 4),
  plural1stPerson: Word('предаёмся', 4),
  plural2ndPerson: Word('предаётесь', 4),
  plural3rdPerson: Word('предаются', 5),
  masculinePast: Word('предавался', 6),
  femininePast: Word('предавалась', 6),
  neuterPast: Word('предавалось', 6),
  pluralPast: Word('предавались', 6),
  imperativeInformal: Word('предавайся', 6),
  imperativeFormal: Word('предавайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(предаваться.name.text, предаваться);

export { предаваться };