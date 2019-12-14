import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вылинять: PerfectVerb = {
  name: Word('вылинять', 1),
  singular1stPerson: Word('вылиняю', 1),
  singular2ndPerson: Word('вылиняешь', 1),
  singular3rdPerson: Word('вылиняет', 1),
  plural1stPerson: Word('вылиняем', 1),
  plural2ndPerson: Word('вылиняете', 1),
  plural3rdPerson: Word('вылиняют', 1),
  masculinePast: Word('вылинял', 1),
  femininePast: Word('вылиняла', 1),
  neuterPast: Word('вылиняло', 1),
  pluralPast: Word('вылиняли', 1),
  imperativeInformal: Word('вылиняй', 1),
  imperativeFormal: Word('вылиняйте', 1),
  imperfect: [],
};

perfectVerbs.set(вылинять.name.text, вылинять);

export { вылинять };