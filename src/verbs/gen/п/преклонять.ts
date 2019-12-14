import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преклонять: PerfectVerb = {
  name: Word('преклонять', 7),
  singular1stPerson: Word('преклоняю', 7),
  singular2ndPerson: Word('преклоняешь', 7),
  singular3rdPerson: Word('преклоняет', 7),
  plural1stPerson: Word('преклоняем', 7),
  plural2ndPerson: Word('преклоняете', 7),
  plural3rdPerson: Word('преклоняют', 7),
  masculinePast: Word('преклонял', 7),
  femininePast: Word('преклоняла', 7),
  neuterPast: Word('преклоняло', 7),
  pluralPast: Word('преклоняли', 7),
  imperativeInformal: Word('преклоняй', 7),
  imperativeFormal: Word('преклоняйте', 7),
  imperfect: [],
};

perfectVerbs.set(преклонять.name.text, преклонять);

export { преклонять };