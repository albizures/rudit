import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озлоблять: PerfectVerb = {
  name: Word('озлоблять', 6),
  singular1stPerson: Word('озлобляю', 6),
  singular2ndPerson: Word('озлобляешь', 6),
  singular3rdPerson: Word('озлобляет', 6),
  plural1stPerson: Word('озлобляем', 6),
  plural2ndPerson: Word('озлобляете', 6),
  plural3rdPerson: Word('озлобляют', 6),
  masculinePast: Word('озлоблял', 6),
  femininePast: Word('озлобляла', 6),
  neuterPast: Word('озлобляло', 6),
  pluralPast: Word('озлобляли', 6),
  imperativeInformal: Word('озлобляй', 6),
  imperativeFormal: Word('озлобляйте', 6),
  imperfect: [],
};

perfectVerbs.set(озлоблять.name.text, озлоблять);

export { озлоблять };