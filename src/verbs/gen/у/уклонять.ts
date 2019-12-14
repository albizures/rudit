import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уклонять: PerfectVerb = {
  name: Word('уклонять', 5),
  singular1stPerson: Word('уклоняю', 5),
  singular2ndPerson: Word('уклоняешь', 5),
  singular3rdPerson: Word('уклоняет', 5),
  plural1stPerson: Word('уклоняем', 5),
  plural2ndPerson: Word('уклоняете', 5),
  plural3rdPerson: Word('уклоняют', 5),
  masculinePast: Word('уклонял', 5),
  femininePast: Word('уклоняла', 5),
  neuterPast: Word('уклоняло', 5),
  pluralPast: Word('уклоняли', 5),
  imperativeInformal: Word('уклоняй', 5),
  imperativeFormal: Word('уклоняйте', 5),
  imperfect: [],
};

perfectVerbs.set(уклонять.name.text, уклонять);

export { уклонять };