import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оголять: PerfectVerb = {
  name: Word('оголять', 4),
  singular1stPerson: Word('оголяю', 4),
  singular2ndPerson: Word('оголяешь', 4),
  singular3rdPerson: Word('оголяет', 4),
  plural1stPerson: Word('оголяем', 4),
  plural2ndPerson: Word('оголяете', 4),
  plural3rdPerson: Word('оголяют', 4),
  masculinePast: Word('оголял', 4),
  femininePast: Word('оголяла', 4),
  neuterPast: Word('оголяло', 4),
  pluralPast: Word('оголяли', 4),
  imperativeInformal: Word('оголяй', 4),
  imperativeFormal: Word('оголяйте', 4),
  imperfect: [],
};

perfectVerbs.set(оголять.name.text, оголять);

export { оголять };