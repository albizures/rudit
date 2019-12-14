import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воодушевлять: PerfectVerb = {
  name: Word('воодушевлять', 9),
  singular1stPerson: Word('воодушевляю', 9),
  singular2ndPerson: Word('воодушевляешь', 9),
  singular3rdPerson: Word('воодушевляет', 9),
  plural1stPerson: Word('воодушевляем', 9),
  plural2ndPerson: Word('воодушевляете', 9),
  plural3rdPerson: Word('воодушевляют', 9),
  masculinePast: Word('воодушевлял', 9),
  femininePast: Word('воодушевляла', 9),
  neuterPast: Word('воодушевляло', 9),
  pluralPast: Word('воодушевляли', 9),
  imperativeInformal: Word('воодушевляй', 9),
  imperativeFormal: Word('воодушевляйте', 9),
  imperfect: [],
};

perfectVerbs.set(воодушевлять.name.text, воодушевлять);

export { воодушевлять };