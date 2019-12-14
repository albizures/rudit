import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догонять: PerfectVerb = {
  name: Word('догонять', 5),
  singular1stPerson: Word('догоняю', 5),
  singular2ndPerson: Word('догоняешь', 5),
  singular3rdPerson: Word('догоняет', 5),
  plural1stPerson: Word('догоняем', 5),
  plural2ndPerson: Word('догоняете', 5),
  plural3rdPerson: Word('догоняют', 5),
  masculinePast: Word('догонял', 5),
  femininePast: Word('догоняла', 5),
  neuterPast: Word('догоняло', 5),
  pluralPast: Word('догоняли', 5),
  imperativeInformal: Word('догоняй', 5),
  imperativeFormal: Word('догоняйте', 5),
  imperfect: ['догнать'],
};

perfectVerbs.set(догонять.name.text, догонять);

export { догонять };