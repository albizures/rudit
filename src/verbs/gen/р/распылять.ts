import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распылять: PerfectVerb = {
  name: Word('распылять', 6),
  singular1stPerson: Word('распыляю', 6),
  singular2ndPerson: Word('распыляешь', 6),
  singular3rdPerson: Word('распыляет', 6),
  plural1stPerson: Word('распыляем', 6),
  plural2ndPerson: Word('распыляете', 6),
  plural3rdPerson: Word('распыляют', 6),
  masculinePast: Word('распылял', 6),
  femininePast: Word('распыляла', 6),
  neuterPast: Word('распыляло', 6),
  pluralPast: Word('распыляли', 6),
  imperativeInformal: Word('распыляй', 6),
  imperativeFormal: Word('распыляйте', 6),
  imperfect: [],
};

perfectVerbs.set(распылять.name.text, распылять);

export { распылять };