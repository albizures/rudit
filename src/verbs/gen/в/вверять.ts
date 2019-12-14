import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вверять: PerfectVerb = {
  name: Word('вверять', 4),
  singular1stPerson: Word('вверяю', 4),
  singular2ndPerson: Word('вверяешь', 4),
  singular3rdPerson: Word('вверяет', 4),
  plural1stPerson: Word('вверяем', 4),
  plural2ndPerson: Word('вверяете', 4),
  plural3rdPerson: Word('вверяют', 4),
  masculinePast: Word('вверял', 4),
  femininePast: Word('вверяла', 4),
  neuterPast: Word('вверяло', 4),
  pluralPast: Word('вверяли', 4),
  imperativeInformal: Word('вверяй', 4),
  imperativeFormal: Word('вверяйте', 4),
  imperfect: [],
};

perfectVerbs.set(вверять.name.text, вверять);

export { вверять };