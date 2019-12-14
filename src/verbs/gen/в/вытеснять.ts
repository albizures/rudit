import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытеснять: PerfectVerb = {
  name: Word('вытеснять', 6),
  singular1stPerson: Word('вытесняю', 6),
  singular2ndPerson: Word('вытесняешь', 6),
  singular3rdPerson: Word('вытесняет', 6),
  plural1stPerson: Word('вытесняем', 6),
  plural2ndPerson: Word('вытесняете', 6),
  plural3rdPerson: Word('вытесняют', 6),
  masculinePast: Word('вытеснял', 6),
  femininePast: Word('вытесняла', 6),
  neuterPast: Word('вытесняло', 6),
  pluralPast: Word('вытесняли', 6),
  imperativeInformal: Word('вытесняй', 6),
  imperativeFormal: Word('вытесняйте', 6),
  imperfect: [],
};

perfectVerbs.set(вытеснять.name.text, вытеснять);

export { вытеснять };