import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсоблять: PerfectVerb = {
  name: Word('подсоблять', 7),
  singular1stPerson: Word('подсобляю', 7),
  singular2ndPerson: Word('подсобляешь', 7),
  singular3rdPerson: Word('подсобляет', 7),
  plural1stPerson: Word('подсобляем', 7),
  plural2ndPerson: Word('подсобляете', 7),
  plural3rdPerson: Word('подсобляют', 7),
  masculinePast: Word('подсоблял', 7),
  femininePast: Word('подсобляла', 7),
  neuterPast: Word('подсобляло', 7),
  pluralPast: Word('подсобляли', 7),
  imperativeInformal: Word('подсобляй', 7),
  imperativeFormal: Word('подсобляйте', 7),
  imperfect: [],
};

perfectVerbs.set(подсоблять.name.text, подсоблять);

export { подсоблять };