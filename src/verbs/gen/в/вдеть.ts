import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдеть: PerfectVerb = {
  name: Word('вдеть', 2),
  singular1stPerson: Word('вдену', 2),
  singular2ndPerson: Word('вденешь', 2),
  singular3rdPerson: Word('вденет', 2),
  plural1stPerson: Word('вденем', 2),
  plural2ndPerson: Word('вденете', 2),
  plural3rdPerson: Word('вденут', 2),
  masculinePast: Word('вдел', 2),
  femininePast: Word('вдела', 2),
  neuterPast: Word('вдело', 2),
  pluralPast: Word('вдели', 2),
  imperativeInformal: Word('вдень', 2),
  imperativeFormal: Word('вденьте', 2),
  imperfect: [],
};

perfectVerbs.set(вдеть.name.text, вдеть);

export { вдеть };