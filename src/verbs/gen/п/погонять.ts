import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const погонять: PerfectVerb = {
  name: Word('погонять', 5),
  singular1stPerson: Word('погоняю', 5),
  singular2ndPerson: Word('погоняешь', 5),
  singular3rdPerson: Word('погоняет', 5),
  plural1stPerson: Word('погоняем', 5),
  plural2ndPerson: Word('погоняете', 5),
  plural3rdPerson: Word('погоняют', 5),
  masculinePast: Word('погонял', 5),
  femininePast: Word('погоняла', 5),
  neuterPast: Word('погоняло', 5),
  pluralPast: Word('погоняли', 5),
  imperativeInformal: Word('погоняй', 5),
  imperativeFormal: Word('погоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(погонять.name.text, погонять);

export { погонять };