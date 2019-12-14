import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укрупнять: PerfectVerb = {
  name: Word('укрупнять', 6),
  singular1stPerson: Word('укрупняю', 6),
  singular2ndPerson: Word('укрупняешь', 6),
  singular3rdPerson: Word('укрупняет', 6),
  plural1stPerson: Word('укрупняем', 6),
  plural2ndPerson: Word('укрупняете', 6),
  plural3rdPerson: Word('укрупняют', 6),
  masculinePast: Word('укрупнял', 6),
  femininePast: Word('укрупняла', 6),
  neuterPast: Word('укрупняло', 6),
  pluralPast: Word('укрупняли', 6),
  imperativeInformal: Word('укрупняй', 6),
  imperativeFormal: Word('укрупняйте', 6),
  imperfect: [],
};

perfectVerbs.set(укрупнять.name.text, укрупнять);

export { укрупнять };