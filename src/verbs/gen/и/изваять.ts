import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изваять: PerfectVerb = {
  name: Word('изваять', 4),
  singular1stPerson: Word('изваяю', 4),
  singular2ndPerson: Word('изваяешь', 4),
  singular3rdPerson: Word('изваяет', 4),
  plural1stPerson: Word('изваяем', 4),
  plural2ndPerson: Word('изваяете', 4),
  plural3rdPerson: Word('изваяют', 4),
  masculinePast: Word('изваял', 4),
  femininePast: Word('изваяла', 4),
  neuterPast: Word('изваяло', 4),
  pluralPast: Word('изваяли', 4),
  imperativeInformal: Word('изваяй', 4),
  imperativeFormal: Word('изваяйте', 4),
  imperfect: [],
};

perfectVerbs.set(изваять.name.text, изваять);

export { изваять };