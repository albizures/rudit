import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сменять: PerfectVerb = {
  name: Word('сменять', 4),
  singular1stPerson: Word('сменяю', 4),
  singular2ndPerson: Word('сменяешь', 4),
  singular3rdPerson: Word('сменяет', 4),
  plural1stPerson: Word('сменяем', 4),
  plural2ndPerson: Word('сменяете', 4),
  plural3rdPerson: Word('сменяют', 4),
  masculinePast: Word('сменял', 4),
  femininePast: Word('сменяла', 4),
  neuterPast: Word('сменяло', 4),
  pluralPast: Word('сменяли', 4),
  imperativeInformal: Word('сменяй', 4),
  imperativeFormal: Word('сменяйте', 4),
  imperfect: [],
};

perfectVerbs.set(сменять.name.text, сменять);

export { сменять };