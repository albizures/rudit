import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вселять: PerfectVerb = {
  name: Word('вселять', 4),
  singular1stPerson: Word('вселяю', 4),
  singular2ndPerson: Word('вселяешь', 4),
  singular3rdPerson: Word('вселяет', 4),
  plural1stPerson: Word('вселяем', 4),
  plural2ndPerson: Word('вселяете', 4),
  plural3rdPerson: Word('вселяют', 4),
  masculinePast: Word('вселял', 4),
  femininePast: Word('вселяла', 4),
  neuterPast: Word('вселяло', 4),
  pluralPast: Word('вселяли', 4),
  imperativeInformal: Word('вселяй', 4),
  imperativeFormal: Word('вселяйте', 4),
  imperfect: [],
};

perfectVerbs.set(вселять.name.text, вселять);

export { вселять };