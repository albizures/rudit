import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приударять: PerfectVerb = {
  name: Word('приударять', 7),
  singular1stPerson: Word('приударяю', 7),
  singular2ndPerson: Word('приударяешь', 7),
  singular3rdPerson: Word('приударяет', 7),
  plural1stPerson: Word('приударяем', 7),
  plural2ndPerson: Word('приударяете', 7),
  plural3rdPerson: Word('приударяют', 7),
  masculinePast: Word('приударял', 7),
  femininePast: Word('приударяла', 7),
  neuterPast: Word('приударяло', 7),
  pluralPast: Word('приударяли', 7),
  imperativeInformal: Word('приударяй', 7),
  imperativeFormal: Word('приударяйте', 7),
  imperfect: [],
};

perfectVerbs.set(приударять.name.text, приударять);

export { приударять };