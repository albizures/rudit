import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вызволять: PerfectVerb = {
  name: Word('вызволять', 6),
  singular1stPerson: Word('вызволяю', 6),
  singular2ndPerson: Word('вызволяешь', 6),
  singular3rdPerson: Word('вызволяет', 6),
  plural1stPerson: Word('вызволяем', 6),
  plural2ndPerson: Word('вызволяете', 6),
  plural3rdPerson: Word('вызволяют', 6),
  masculinePast: Word('вызволял', 6),
  femininePast: Word('вызволяла', 6),
  neuterPast: Word('вызволяло', 6),
  pluralPast: Word('вызволяли', 6),
  imperativeInformal: Word('вызволяй', 6),
  imperativeFormal: Word('вызволяйте', 6),
  imperfect: [],
};

perfectVerbs.set(вызволять.name.text, вызволять);

export { вызволять };