import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сочинять: PerfectVerb = {
  name: Word('сочинять', 5),
  singular1stPerson: Word('сочиняю', 5),
  singular2ndPerson: Word('сочиняешь', 5),
  singular3rdPerson: Word('сочиняет', 5),
  plural1stPerson: Word('сочиняем', 5),
  plural2ndPerson: Word('сочиняете', 5),
  plural3rdPerson: Word('сочиняют', 5),
  masculinePast: Word('сочинял', 5),
  femininePast: Word('сочиняла', 5),
  neuterPast: Word('сочиняло', 5),
  pluralPast: Word('сочиняли', 5),
  imperativeInformal: Word('сочиняй', 5),
  imperativeFormal: Word('сочиняйте', 5),
  imperfect: [],
};

perfectVerbs.set(сочинять.name.text, сочинять);

export { сочинять };