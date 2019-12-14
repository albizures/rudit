import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распасться: PerfectVerb = {
  name: Word('распасться', 4),
  singular1stPerson: Word('распадусь', 6),
  singular2ndPerson: Word('распадёшься', 1),
  singular3rdPerson: Word('распадётся', 1),
  plural1stPerson: Word('распадёмся', 1),
  plural2ndPerson: Word('распадётесь', 1),
  plural3rdPerson: Word('распадутся', 6),
  masculinePast: Word('распался', 4),
  femininePast: Word('распалась', 4),
  neuterPast: Word('распалось', 4),
  pluralPast: Word('распались', 4),
  imperativeInformal: Word('распадись', 6),
  imperativeFormal: Word('распадитесь', 6),
  imperfect: [],
};

perfectVerbs.set(распасться.name.text, распасться);

export { распасться };