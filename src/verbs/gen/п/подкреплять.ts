import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подкреплять: PerfectVerb = {
  name: Word('подкреплять', 8),
  singular1stPerson: Word('подкрепляю', 8),
  singular2ndPerson: Word('подкрепляешь', 8),
  singular3rdPerson: Word('подкрепляет', 8),
  plural1stPerson: Word('подкрепляем', 8),
  plural2ndPerson: Word('подкрепляете', 8),
  plural3rdPerson: Word('подкрепляют', 8),
  masculinePast: Word('подкреплял', 8),
  femininePast: Word('подкрепляла', 8),
  neuterPast: Word('подкрепляло', 8),
  pluralPast: Word('подкрепляли', 8),
  imperativeInformal: Word('подкрепляй', 8),
  imperativeFormal: Word('подкрепляйте', 8),
  imperfect: [],
};

perfectVerbs.set(подкреплять.name.text, подкреплять);

export { подкреплять };