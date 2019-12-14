import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поселять: PerfectVerb = {
  name: Word('поселять', 5),
  singular1stPerson: Word('поселяю', 5),
  singular2ndPerson: Word('поселяешь', 5),
  singular3rdPerson: Word('поселяет', 5),
  plural1stPerson: Word('поселяем', 5),
  plural2ndPerson: Word('поселяете', 5),
  plural3rdPerson: Word('поселяют', 5),
  masculinePast: Word('поселял', 5),
  femininePast: Word('поселяла', 5),
  neuterPast: Word('поселяло', 5),
  pluralPast: Word('поселяли', 5),
  imperativeInformal: Word('поселяй', 5),
  imperativeFormal: Word('поселяйте', 5),
  imperfect: [],
};

perfectVerbs.set(поселять.name.text, поселять);

export { поселять };