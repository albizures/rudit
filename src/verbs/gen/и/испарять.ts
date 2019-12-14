import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испарять: PerfectVerb = {
  name: Word('испарять', 5),
  singular1stPerson: Word('испаряю', 5),
  singular2ndPerson: Word('испаряешь', 5),
  singular3rdPerson: Word('испаряет', 5),
  plural1stPerson: Word('испаряем', 5),
  plural2ndPerson: Word('испаряете', 5),
  plural3rdPerson: Word('испаряют', 5),
  masculinePast: Word('испарял', 5),
  femininePast: Word('испаряла', 5),
  neuterPast: Word('испаряло', 5),
  pluralPast: Word('испаряли', 5),
  imperativeInformal: Word('испаряй', 5),
  imperativeFormal: Word('испаряйте', 5),
  imperfect: [],
};

perfectVerbs.set(испарять.name.text, испарять);

export { испарять };