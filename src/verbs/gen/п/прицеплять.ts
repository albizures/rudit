import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прицеплять: PerfectVerb = {
  name: Word('прицеплять', 7),
  singular1stPerson: Word('прицепляю', 7),
  singular2ndPerson: Word('прицепляешь', 7),
  singular3rdPerson: Word('прицепляет', 7),
  plural1stPerson: Word('прицепляем', 7),
  plural2ndPerson: Word('прицепляете', 7),
  plural3rdPerson: Word('прицепляют', 7),
  masculinePast: Word('прицеплял', 7),
  femininePast: Word('прицепляла', 7),
  neuterPast: Word('прицепляло', 7),
  pluralPast: Word('прицепляли', 7),
  imperativeInformal: Word('прицепляй', 7),
  imperativeFormal: Word('прицепляйте', 7),
  imperfect: [],
};

perfectVerbs.set(прицеплять.name.text, прицеплять);

export { прицеплять };