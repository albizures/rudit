import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вперять: PerfectVerb = {
  name: Word('вперять', 4),
  singular1stPerson: Word('вперяю', 4),
  singular2ndPerson: Word('вперяешь', 4),
  singular3rdPerson: Word('вперяет', 4),
  plural1stPerson: Word('вперяем', 4),
  plural2ndPerson: Word('вперяете', 4),
  plural3rdPerson: Word('вперяют', 4),
  masculinePast: Word('вперял', 4),
  femininePast: Word('вперяла', 4),
  neuterPast: Word('вперяло', 4),
  pluralPast: Word('вперяли', 4),
  imperativeInformal: Word('вперяй', 4),
  imperativeFormal: Word('вперяйте', 4),
  imperfect: [],
};

perfectVerbs.set(вперять.name.text, вперять);

export { вперять };