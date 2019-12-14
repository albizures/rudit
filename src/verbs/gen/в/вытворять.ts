import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытворять: PerfectVerb = {
  name: Word('вытворять', 6),
  singular1stPerson: Word('вытворяю', 6),
  singular2ndPerson: Word('вытворяешь', 6),
  singular3rdPerson: Word('вытворяет', 6),
  plural1stPerson: Word('вытворяем', 6),
  plural2ndPerson: Word('вытворяете', 6),
  plural3rdPerson: Word('вытворяют', 6),
  masculinePast: Word('вытворял', 6),
  femininePast: Word('вытворяла', 6),
  neuterPast: Word('вытворяло', 6),
  pluralPast: Word('вытворяли', 6),
  imperativeInformal: Word('вытворяй', 6),
  imperativeFormal: Word('вытворяйте', 6),
  imperfect: [],
};

perfectVerbs.set(вытворять.name.text, вытворять);

export { вытворять };