import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обвинять: PerfectVerb = {
  name: Word('обвинять', 5),
  singular1stPerson: Word('обвиняю', 5),
  singular2ndPerson: Word('обвиняешь', 5),
  singular3rdPerson: Word('обвиняет', 5),
  plural1stPerson: Word('обвиняем', 5),
  plural2ndPerson: Word('обвиняете', 5),
  plural3rdPerson: Word('обвиняют', 5),
  masculinePast: Word('обвинял', 5),
  femininePast: Word('обвиняла', 5),
  neuterPast: Word('обвиняло', 5),
  pluralPast: Word('обвиняли', 5),
  imperativeInformal: Word('обвиняй', 5),
  imperativeFormal: Word('обвиняйте', 5),
  imperfect: ['обвинить'],
};

perfectVerbs.set(обвинять.name.text, обвинять);

export { обвинять };