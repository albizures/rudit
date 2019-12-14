import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сверять: PerfectVerb = {
  name: Word('сверять', 4),
  singular1stPerson: Word('сверяю', 4),
  singular2ndPerson: Word('сверяешь', 4),
  singular3rdPerson: Word('сверяет', 4),
  plural1stPerson: Word('сверяем', 4),
  plural2ndPerson: Word('сверяете', 4),
  plural3rdPerson: Word('сверяют', 4),
  masculinePast: Word('сверял', 4),
  femininePast: Word('сверяла', 4),
  neuterPast: Word('сверяло', 4),
  pluralPast: Word('сверяли', 4),
  imperativeInformal: Word('сверяй', 4),
  imperativeFormal: Word('сверяйте', 4),
  imperfect: [],
};

perfectVerbs.set(сверять.name.text, сверять);

export { сверять };