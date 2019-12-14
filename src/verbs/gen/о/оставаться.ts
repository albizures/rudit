import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оставаться: PerfectVerb = {
  name: Word('оставаться', 5),
  singular1stPerson: Word('остаюсь', 4),
  singular2ndPerson: Word('остаёшься', 3),
  singular3rdPerson: Word('остаётся', 3),
  plural1stPerson: Word('остаёмся', 3),
  plural2ndPerson: Word('остаётесь', 3),
  plural3rdPerson: Word('остаются', 4),
  masculinePast: Word('оставался', 5),
  femininePast: Word('оставалась', 5),
  neuterPast: Word('оставалось', 5),
  pluralPast: Word('оставались', 5),
  imperativeInformal: Word('оставайся', 5),
  imperativeFormal: Word('оставайтесь', 5),
  imperfect: ['остаться'],
};

perfectVerbs.set(оставаться.name.text, оставаться);

export { оставаться };