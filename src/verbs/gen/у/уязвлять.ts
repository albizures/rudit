import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уязвлять: PerfectVerb = {
  name: Word('уязвлять', 5),
  singular1stPerson: Word('уязвляю', 5),
  singular2ndPerson: Word('уязвляешь', 5),
  singular3rdPerson: Word('уязвляет', 5),
  plural1stPerson: Word('уязвляем', 5),
  plural2ndPerson: Word('уязвляете', 5),
  plural3rdPerson: Word('уязвляют', 5),
  masculinePast: Word('уязвлял', 5),
  femininePast: Word('уязвляла', 5),
  neuterPast: Word('уязвляло', 5),
  pluralPast: Word('уязвляли', 5),
  imperativeInformal: Word('уязвляй', 5),
  imperativeFormal: Word('уязвляйте', 5),
  imperfect: [],
};

perfectVerbs.set(уязвлять.name.text, уязвлять);

export { уязвлять };