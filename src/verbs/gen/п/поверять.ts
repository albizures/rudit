import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поверять: PerfectVerb = {
  name: Word('поверять', 5),
  singular1stPerson: Word('поверяю', 5),
  singular2ndPerson: Word('поверяешь', 5),
  singular3rdPerson: Word('поверяет', 5),
  plural1stPerson: Word('поверяем', 5),
  plural2ndPerson: Word('поверяете', 5),
  plural3rdPerson: Word('поверяют', 5),
  masculinePast: Word('поверял', 5),
  femininePast: Word('поверяла', 5),
  neuterPast: Word('поверяло', 5),
  pluralPast: Word('поверяли', 5),
  imperativeInformal: Word('поверяй', 5),
  imperativeFormal: Word('поверяйте', 5),
  imperfect: [],
};

perfectVerbs.set(поверять.name.text, поверять);

export { поверять };