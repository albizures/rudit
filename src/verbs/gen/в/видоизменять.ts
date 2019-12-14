import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const видоизменять: PerfectVerb = {
  name: Word('видоизменять', 9),
  singular1stPerson: Word('видоизменяю', 9),
  singular2ndPerson: Word('видоизменяешь', 9),
  singular3rdPerson: Word('видоизменяет', 9),
  plural1stPerson: Word('видоизменяем', 9),
  plural2ndPerson: Word('видоизменяете', 9),
  plural3rdPerson: Word('видоизменяют', 9),
  masculinePast: Word('видоизменял', 9),
  femininePast: Word('видоизменяла', 9),
  neuterPast: Word('видоизменяло', 9),
  pluralPast: Word('видоизменяли', 9),
  imperativeInformal: Word('видоизменяй', 9),
  imperativeFormal: Word('видоизменяйте', 9),
  imperfect: [],
};

perfectVerbs.set(видоизменять.name.text, видоизменять);

export { видоизменять };