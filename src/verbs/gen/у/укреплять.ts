import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укреплять: PerfectVerb = {
  name: Word('укреплять', 6),
  singular1stPerson: Word('укрепляю', 6),
  singular2ndPerson: Word('укрепляешь', 6),
  singular3rdPerson: Word('укрепляет', 6),
  plural1stPerson: Word('укрепляем', 6),
  plural2ndPerson: Word('укрепляете', 6),
  plural3rdPerson: Word('укрепляют', 6),
  masculinePast: Word('укреплял', 6),
  femininePast: Word('укрепляла', 6),
  neuterPast: Word('укрепляло', 6),
  pluralPast: Word('укрепляли', 6),
  imperativeInformal: Word('укрепляй', 6),
  imperativeFormal: Word('укрепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(укреплять.name.text, укреплять);

export { укреплять };