import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изъять: PerfectVerb = {
  name: Word('изъять', 3),
  singular1stPerson: Word('изыму', 4),
  singular2ndPerson: Word('изымешь', 2),
  singular3rdPerson: Word('изымет', 2),
  plural1stPerson: Word('изымем', 2),
  plural2ndPerson: Word('изымете', 2),
  plural3rdPerson: Word('изымут', 2),
  masculinePast: Word('изъял', 3),
  femininePast: Word('изъяла', 3),
  neuterPast: Word('изъяло', 3),
  pluralPast: Word('изъяли', 3),
  imperativeInformal: Word('изыми', 4),
  imperativeFormal: Word('изымите', 4),
  imperfect: [],
};

perfectVerbs.set(изъять.name.text, изъять);

export { изъять };