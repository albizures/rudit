import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выселять: PerfectVerb = {
  name: Word('выселять', 5),
  singular1stPerson: Word('выселяю', 5),
  singular2ndPerson: Word('выселяешь', 5),
  singular3rdPerson: Word('выселяет', 5),
  plural1stPerson: Word('выселяем', 5),
  plural2ndPerson: Word('выселяете', 5),
  plural3rdPerson: Word('выселяют', 5),
  masculinePast: Word('выселял', 5),
  femininePast: Word('выселяла', 5),
  neuterPast: Word('выселяло', 5),
  pluralPast: Word('выселяли', 5),
  imperativeInformal: Word('выселяй', 5),
  imperativeFormal: Word('выселяйте', 5),
  imperfect: ['выселить'],
};

perfectVerbs.set(выселять.name.text, выселять);

export { выселять };