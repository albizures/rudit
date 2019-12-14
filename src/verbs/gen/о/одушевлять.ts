import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одушевлять: PerfectVerb = {
  name: Word('одушевлять', 7),
  singular1stPerson: Word('одушевляю', 7),
  singular2ndPerson: Word('одушевляешь', 7),
  singular3rdPerson: Word('одушевляет', 7),
  plural1stPerson: Word('одушевляем', 7),
  plural2ndPerson: Word('одушевляете', 7),
  plural3rdPerson: Word('одушевляют', 7),
  masculinePast: Word('одушевлял', 7),
  femininePast: Word('одушевляла', 7),
  neuterPast: Word('одушевляло', 7),
  pluralPast: Word('одушевляли', 7),
  imperativeInformal: Word('одушевляй', 7),
  imperativeFormal: Word('одушевляйте', 7),
  imperfect: [],
};

perfectVerbs.set(одушевлять.name.text, одушевлять);

export { одушевлять };