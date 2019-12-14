import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облинять: PerfectVerb = {
  name: Word('облинять', 5),
  singular1stPerson: Word('облиняю', 5),
  singular2ndPerson: Word('облиняешь', 5),
  singular3rdPerson: Word('облиняет', 5),
  plural1stPerson: Word('облиняем', 5),
  plural2ndPerson: Word('облиняете', 5),
  plural3rdPerson: Word('облиняют', 5),
  masculinePast: Word('облинял', 5),
  femininePast: Word('облиняла', 5),
  neuterPast: Word('облиняло', 5),
  pluralPast: Word('облиняли', 5),
  imperativeInformal: Word('облиняй', 5),
  imperativeFormal: Word('облиняйте', 5),
  imperfect: [],
};

perfectVerbs.set(облинять.name.text, облинять);

export { облинять };