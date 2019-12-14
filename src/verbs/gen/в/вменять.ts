import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вменять: PerfectVerb = {
  name: Word('вменять', 4),
  singular1stPerson: Word('вменяю', 4),
  singular2ndPerson: Word('вменяешь', 4),
  singular3rdPerson: Word('вменяет', 4),
  plural1stPerson: Word('вменяем', 4),
  plural2ndPerson: Word('вменяете', 4),
  plural3rdPerson: Word('вменяют', 4),
  masculinePast: Word('вменял', 4),
  femininePast: Word('вменяла', 4),
  neuterPast: Word('вменяло', 4),
  pluralPast: Word('вменяли', 4),
  imperativeInformal: Word('вменяй', 4),
  imperativeFormal: Word('вменяйте', 4),
  imperfect: [],
};

perfectVerbs.set(вменять.name.text, вменять);

export { вменять };