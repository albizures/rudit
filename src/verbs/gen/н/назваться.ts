import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const назваться: PerfectVerb = {
  name: Word('назваться', 4),
  singular1stPerson: Word('назовусь', 5),
  singular2ndPerson: Word('назовёшься', 1),
  singular3rdPerson: Word('назовётся', 1),
  plural1stPerson: Word('назовёмся', 1),
  plural2ndPerson: Word('назовётесь', 1),
  plural3rdPerson: Word('назовутся', 5),
  masculinePast: Word('назвался', 4),
  femininePast: Word('назвалась', 6),
  neuterPast: Word('назвалось//назвало'сь', 4),
  pluralPast: Word('назвались//назвали'сь', 4),
  imperativeInformal: Word('назовись', 5),
  imperativeFormal: Word('назовитесь', 5),
  imperfect: [],
};

perfectVerbs.set(назваться.name.text, назваться);

export { назваться };