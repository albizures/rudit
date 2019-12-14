import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расселять: PerfectVerb = {
  name: Word('расселять', 6),
  singular1stPerson: Word('расселяю', 6),
  singular2ndPerson: Word('расселяешь', 6),
  singular3rdPerson: Word('расселяет', 6),
  plural1stPerson: Word('расселяем', 6),
  plural2ndPerson: Word('расселяете', 6),
  plural3rdPerson: Word('расселяют', 6),
  masculinePast: Word('расселял', 6),
  femininePast: Word('расселяла', 6),
  neuterPast: Word('расселяло', 6),
  pluralPast: Word('расселяли', 6),
  imperativeInformal: Word('расселяй', 6),
  imperativeFormal: Word('расселяйте', 6),
  imperfect: [],
};

perfectVerbs.set(расселять.name.text, расселять);

export { расселять };