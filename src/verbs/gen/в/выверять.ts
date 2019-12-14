import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выверять: PerfectVerb = {
  name: Word('выверять', 5),
  singular1stPerson: Word('выверяю', 5),
  singular2ndPerson: Word('выверяешь', 5),
  singular3rdPerson: Word('выверяет', 5),
  plural1stPerson: Word('выверяем', 5),
  plural2ndPerson: Word('выверяете', 5),
  plural3rdPerson: Word('выверяют', 5),
  masculinePast: Word('выверял', 5),
  femininePast: Word('выверяла', 5),
  neuterPast: Word('выверяло', 5),
  pluralPast: Word('выверяли', 5),
  imperativeInformal: Word('выверяй', 5),
  imperativeFormal: Word('выверяйте', 5),
  imperfect: [],
};

perfectVerbs.set(выверять.name.text, выверять);

export { выверять };