import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выменять: PerfectVerb = {
  name: Word('выменять', 1),
  singular1stPerson: Word('выменяю', 1),
  singular2ndPerson: Word('выменяешь', 1),
  singular3rdPerson: Word('выменяет', 1),
  plural1stPerson: Word('выменяем', 1),
  plural2ndPerson: Word('выменяете', 1),
  plural3rdPerson: Word('выменяют', 1),
  masculinePast: Word('выменял', 1),
  femininePast: Word('выменяла', 1),
  neuterPast: Word('выменяло', 1),
  pluralPast: Word('выменяли', 1),
  imperativeInformal: Word('выменяй', 1),
  imperativeFormal: Word('выменяйте', 1),
  imperfect: [],
};

perfectVerbs.set(выменять.name.text, выменять);

export { выменять };