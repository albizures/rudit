import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издаваться: PerfectVerb = {
  name: Word('издаваться', 5),
  singular1stPerson: Word('издаюсь', 4),
  singular2ndPerson: Word('издаёшься', 3),
  singular3rdPerson: Word('издаётся', 3),
  plural1stPerson: Word('издаёмся', 3),
  plural2ndPerson: Word('издаётесь', 3),
  plural3rdPerson: Word('издаются', 4),
  masculinePast: Word('издавался', 5),
  femininePast: Word('издавалась', 5),
  neuterPast: Word('издавалось', 5),
  pluralPast: Word('издавались', 5),
  imperativeInformal: Word('издавайся', 5),
  imperativeFormal: Word('издавайтесь', 5),
  imperfect: ['издаться'],
};

perfectVerbs.set(издаваться.name.text, издаваться);

export { издаваться };