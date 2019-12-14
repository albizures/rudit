import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const начинять: PerfectVerb = {
  name: Word('начинять', 5),
  singular1stPerson: Word('начиняю', 5),
  singular2ndPerson: Word('начиняешь', 5),
  singular3rdPerson: Word('начиняет', 5),
  plural1stPerson: Word('начиняем', 5),
  plural2ndPerson: Word('начиняете', 5),
  plural3rdPerson: Word('начиняют', 5),
  masculinePast: Word('начинял', 5),
  femininePast: Word('начиняла', 5),
  neuterPast: Word('начиняло', 5),
  pluralPast: Word('начиняли', 5),
  imperativeInformal: Word('начиняй', 5),
  imperativeFormal: Word('начиняйте', 5),
  imperfect: [],
};

perfectVerbs.set(начинять.name.text, начинять);

export { начинять };