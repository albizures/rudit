import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отклонять: PerfectVerb = {
  name: Word('отклонять', 6),
  singular1stPerson: Word('отклоняю', 6),
  singular2ndPerson: Word('отклоняешь', 6),
  singular3rdPerson: Word('отклоняет', 6),
  plural1stPerson: Word('отклоняем', 6),
  plural2ndPerson: Word('отклоняете', 6),
  plural3rdPerson: Word('отклоняют', 6),
  masculinePast: Word('отклонял', 6),
  femininePast: Word('отклоняла', 6),
  neuterPast: Word('отклоняло', 6),
  pluralPast: Word('отклоняли', 6),
  imperativeInformal: Word('отклоняй', 6),
  imperativeFormal: Word('отклоняйте', 6),
  imperfect: [],
};

perfectVerbs.set(отклонять.name.text, отклонять);

export { отклонять };