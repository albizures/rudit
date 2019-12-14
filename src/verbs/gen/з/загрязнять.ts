import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрязнять: PerfectVerb = {
  name: Word('загрязнять', 7),
  singular1stPerson: Word('загрязняю', 7),
  singular2ndPerson: Word('загрязняешь', 7),
  singular3rdPerson: Word('загрязняет', 7),
  plural1stPerson: Word('загрязняем', 7),
  plural2ndPerson: Word('загрязняете', 7),
  plural3rdPerson: Word('загрязняют', 7),
  masculinePast: Word('загрязнял', 7),
  femininePast: Word('загрязняла', 7),
  neuterPast: Word('загрязняло', 7),
  pluralPast: Word('загрязняли', 7),
  imperativeInformal: Word('загрязняй', 7),
  imperativeFormal: Word('загрязняйте', 7),
  imperfect: [],
};

perfectVerbs.set(загрязнять.name.text, загрязнять);

export { загрязнять };