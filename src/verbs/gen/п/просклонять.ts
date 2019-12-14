import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просклонять: PerfectVerb = {
  name: Word('просклонять', 8),
  singular1stPerson: Word('просклоняю', 8),
  singular2ndPerson: Word('просклоняешь', 8),
  singular3rdPerson: Word('просклоняет', 8),
  plural1stPerson: Word('просклоняем', 8),
  plural2ndPerson: Word('просклоняете', 8),
  plural3rdPerson: Word('просклоняют', 8),
  masculinePast: Word('просклонял', 8),
  femininePast: Word('просклоняла', 8),
  neuterPast: Word('просклоняло', 8),
  pluralPast: Word('просклоняли', 8),
  imperativeInformal: Word('просклоняй', 8),
  imperativeFormal: Word('просклоняйте', 8),
  imperfect: [],
};

perfectVerbs.set(просклонять.name.text, просклонять);

export { просклонять };