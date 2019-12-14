import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сослаться: PerfectVerb = {
  name: Word('сослаться', 4),
  singular1stPerson: Word('сошлюсь', 4),
  singular2ndPerson: Word('сошлёшься', 4),
  singular3rdPerson: Word('сошлётся', 4),
  plural1stPerson: Word('сошлёмся', 4),
  plural2ndPerson: Word('сошлётесь', 4),
  plural3rdPerson: Word('сошлются', 4),
  masculinePast: Word('сослался', 4),
  femininePast: Word('сослалась', 4),
  neuterPast: Word('сослалось', 4),
  pluralPast: Word('сослались', 4),
  imperativeInformal: Word('сошлись', 4),
  imperativeFormal: Word('сошлитесь', 4),
  imperfect: [],
};

perfectVerbs.set(сослаться.name.text, сослаться);

export { сослаться };