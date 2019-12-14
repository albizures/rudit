import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воссоздаваться: PerfectVerb = {
  name: Word('воссоздаваться', 9),
  singular1stPerson: Word('воссоздаюсь', 8),
  singular2ndPerson: Word('воссоздаёшься', 7),
  singular3rdPerson: Word('воссоздаётся', 7),
  plural1stPerson: Word('воссоздаёмся', 7),
  plural2ndPerson: Word('воссоздаётесь', 7),
  plural3rdPerson: Word('воссоздаются', 8),
  masculinePast: Word('воссоздавался', 9),
  femininePast: Word('воссоздавалась', 9),
  neuterPast: Word('воссоздавалось', 9),
  pluralPast: Word('воссоздавались', 9),
  imperativeInformal: Word('воссоздавайся', 9),
  imperativeFormal: Word('воссоздавайтесь', 9),
  imperfect: [],
};

perfectVerbs.set(воссоздаваться.name.text, воссоздаваться);

export { воссоздаваться };