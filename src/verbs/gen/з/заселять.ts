import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заселять: PerfectVerb = {
  name: Word('заселять', 5),
  singular1stPerson: Word('заселяю', 5),
  singular2ndPerson: Word('заселяешь', 5),
  singular3rdPerson: Word('заселяет', 5),
  plural1stPerson: Word('заселяем', 5),
  plural2ndPerson: Word('заселяете', 5),
  plural3rdPerson: Word('заселяют', 5),
  masculinePast: Word('заселял', 5),
  femininePast: Word('заселяла', 5),
  neuterPast: Word('заселяло', 5),
  pluralPast: Word('заселяли', 5),
  imperativeInformal: Word('заселяй', 5),
  imperativeFormal: Word('заселяйте', 5),
  imperfect: [],
};

perfectVerbs.set(заселять.name.text, заселять);

export { заселять };