import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доковылять: PerfectVerb = {
  name: Word('доковылять', 7),
  singular1stPerson: Word('доковыляю', 7),
  singular2ndPerson: Word('доковыляешь', 7),
  singular3rdPerson: Word('доковыляет', 7),
  plural1stPerson: Word('доковыляем', 7),
  plural2ndPerson: Word('доковыляете', 7),
  plural3rdPerson: Word('доковыляют', 7),
  masculinePast: Word('доковылял', 7),
  femininePast: Word('доковыляла', 7),
  neuterPast: Word('доковыляло', 7),
  pluralPast: Word('доковыляли', 7),
  imperativeInformal: Word('доковыляй', 7),
  imperativeFormal: Word('доковыляйте', 7),
  imperfect: [],
};

perfectVerbs.set(доковылять.name.text, доковылять);

export { доковылять };