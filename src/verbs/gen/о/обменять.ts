import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обменять: PerfectVerb = {
  name: Word('обменять', 5),
  singular1stPerson: Word('обменяю', 5),
  singular2ndPerson: Word('обменяешь', 5),
  singular3rdPerson: Word('обменяет', 5),
  plural1stPerson: Word('обменяем', 5),
  plural2ndPerson: Word('обменяете', 5),
  plural3rdPerson: Word('обменяют', 5),
  masculinePast: Word('обменял', 5),
  femininePast: Word('обменяла', 5),
  neuterPast: Word('обменяло', 5),
  pluralPast: Word('обменяли', 5),
  imperativeInformal: Word('обменяй', 5),
  imperativeFormal: Word('обменяйте', 5),
  imperfect: [],
};

perfectVerbs.set(обменять.name.text, обменять);

export { обменять };