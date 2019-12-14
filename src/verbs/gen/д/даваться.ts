import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const даваться: PerfectVerb = {
  name: Word('даваться', 3),
  singular1stPerson: Word('даюсь', 2),
  singular2ndPerson: Word('даёшься', 1),
  singular3rdPerson: Word('даётся', 1),
  plural1stPerson: Word('даёмся', 1),
  plural2ndPerson: Word('даётесь', 1),
  plural3rdPerson: Word('даются', 2),
  masculinePast: Word('давался', 3),
  femininePast: Word('давалась', 3),
  neuterPast: Word('давалось', 3),
  pluralPast: Word('давались', 3),
  imperativeInformal: Word('давайся', 3),
  imperativeFormal: Word('давайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(даваться.name.text, даваться);

export { даваться };