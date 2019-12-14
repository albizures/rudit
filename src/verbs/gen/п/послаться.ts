import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const послаться: PerfectVerb = {
  name: Word('послаться', 4),
  singular1stPerson: Word('пошлюсь', 4),
  singular2ndPerson: Word('пошлюёшься', 4),
  singular3rdPerson: Word('пошлюётся', 4),
  plural1stPerson: Word('пошлюёмся', 4),
  plural2ndPerson: Word('пошлюётесь', 7),
  plural3rdPerson: Word('пошлются', 4),
  masculinePast: Word('послался', 4),
  femininePast: Word('послалась', 4),
  neuterPast: Word('послалось', 4),
  pluralPast: Word('послались', 4),
  imperativeInformal: Word('пошлись', 4),
  imperativeFormal: Word('пошлитесь', 4),
  imperfect: [],
};

perfectVerbs.set(послаться.name.text, послаться);

export { послаться };