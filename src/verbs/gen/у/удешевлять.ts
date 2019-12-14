import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удешевлять: PerfectVerb = {
  name: Word('удешевлять', 7),
  singular1stPerson: Word('удешевляю', 7),
  singular2ndPerson: Word('удешевляешь', 7),
  singular3rdPerson: Word('удешевляет', 7),
  plural1stPerson: Word('удешевляем', 7),
  plural2ndPerson: Word('удешевляете', 7),
  plural3rdPerson: Word('удешевляют', 7),
  masculinePast: Word('удешевлял', 7),
  femininePast: Word('удешевляла', 7),
  neuterPast: Word('удешевляло', 7),
  pluralPast: Word('удешевляли', 7),
  imperativeInformal: Word('удешевляй', 7),
  imperativeFormal: Word('удешевляйте', 7),
  imperfect: [],
};

perfectVerbs.set(удешевлять.name.text, удешевлять);

export { удешевлять };