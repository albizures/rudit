import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учинять: PerfectVerb = {
  name: Word('учинять', 4),
  singular1stPerson: Word('учиняю', 4),
  singular2ndPerson: Word('учиняешь', 4),
  singular3rdPerson: Word('учиняет', 4),
  plural1stPerson: Word('учиняем', 4),
  plural2ndPerson: Word('учиняете', 4),
  plural3rdPerson: Word('учиняют', 4),
  masculinePast: Word('учинял', 4),
  femininePast: Word('учиняла', 4),
  neuterPast: Word('учиняло', 4),
  pluralPast: Word('учиняли', 4),
  imperativeInformal: Word('учиняй', 4),
  imperativeFormal: Word('учиняйте', 4),
  imperfect: [],
};

perfectVerbs.set(учинять.name.text, учинять);

export { учинять };