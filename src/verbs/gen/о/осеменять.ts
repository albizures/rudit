import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осеменять: PerfectVerb = {
  name: Word('осеменять', 6),
  singular1stPerson: Word('осеменяю', 6),
  singular2ndPerson: Word('осеменяешь', 6),
  singular3rdPerson: Word('осеменяет', 6),
  plural1stPerson: Word('осеменяем', 6),
  plural2ndPerson: Word('осеменяете', 6),
  plural3rdPerson: Word('осеменяют', 6),
  masculinePast: Word('осеменял', 6),
  femininePast: Word('осеменяла', 6),
  neuterPast: Word('осеменяло', 6),
  pluralPast: Word('осеменяли', 6),
  imperativeInformal: Word('осеменяй', 6),
  imperativeFormal: Word('осеменяйте', 6),
  imperfect: [],
};

perfectVerbs.set(осеменять.name.text, осеменять);

export { осеменять };