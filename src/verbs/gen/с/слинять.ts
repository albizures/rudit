import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const слинять: PerfectVerb = {
  name: Word('слинять', 4),
  singular1stPerson: Word('слиняю', 4),
  singular2ndPerson: Word('слиняешь', 4),
  singular3rdPerson: Word('слиняет', 4),
  plural1stPerson: Word('слиняем', 4),
  plural2ndPerson: Word('слиняете', 4),
  plural3rdPerson: Word('слиняют', 4),
  masculinePast: Word('слинял', 4),
  femininePast: Word('слиняла', 4),
  neuterPast: Word('слиняло', 4),
  pluralPast: Word('слиняли', 4),
  imperativeInformal: Word('слиняй', 4),
  imperativeFormal: Word('слиняйте', 4),
  imperfect: [],
};

perfectVerbs.set(слинять.name.text, слинять);

export { слинять };