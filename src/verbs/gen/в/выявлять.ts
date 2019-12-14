import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выявлять: PerfectVerb = {
  name: Word('выявлять', 5),
  singular1stPerson: Word('выявляю', 5),
  singular2ndPerson: Word('выявляешь', 5),
  singular3rdPerson: Word('выявляет', 5),
  plural1stPerson: Word('выявляем', 5),
  plural2ndPerson: Word('выявляете', 5),
  plural3rdPerson: Word('выявляют', 5),
  masculinePast: Word('выявлял', 5),
  femininePast: Word('выявляла', 5),
  neuterPast: Word('выявляло', 5),
  pluralPast: Word('выявляли', 5),
  imperativeInformal: Word('выявляй', 5),
  imperativeFormal: Word('выявляйте', 5),
  imperfect: ['выявить'],
};

perfectVerbs.set(выявлять.name.text, выявлять);

export { выявлять };