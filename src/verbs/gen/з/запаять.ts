import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запаять: PerfectVerb = {
  name: Word('запаять', 4),
  singular1stPerson: Word('запаяю', 4),
  singular2ndPerson: Word('запаяешь', 4),
  singular3rdPerson: Word('запаяет', 4),
  plural1stPerson: Word('запаяем', 4),
  plural2ndPerson: Word('запаяете', 4),
  plural3rdPerson: Word('запаяют', 4),
  masculinePast: Word('запаял', 4),
  femininePast: Word('запаяла', 4),
  neuterPast: Word('запаяло', 4),
  pluralPast: Word('запаяли', 4),
  imperativeInformal: Word('запаяй', 4),
  imperativeFormal: Word('запаяйте', 4),
  imperfect: [],
};

perfectVerbs.set(запаять.name.text, запаять);

export { запаять };