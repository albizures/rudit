import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отселять: PerfectVerb = {
  name: Word('отселять', 5),
  singular1stPerson: Word('отселяю', 5),
  singular2ndPerson: Word('отселяешь', 5),
  singular3rdPerson: Word('отселяет', 5),
  plural1stPerson: Word('отселяем', 5),
  plural2ndPerson: Word('отселяете', 5),
  plural3rdPerson: Word('отселяют', 5),
  masculinePast: Word('отселял', 5),
  femininePast: Word('отселяла', 5),
  neuterPast: Word('отселяло', 5),
  pluralPast: Word('отселяли', 5),
  imperativeInformal: Word('отселяй', 5),
  imperativeFormal: Word('отселяйте', 5),
  imperfect: [],
};

perfectVerbs.set(отселять.name.text, отселять);

export { отселять };