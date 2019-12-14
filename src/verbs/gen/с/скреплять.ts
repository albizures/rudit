import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скреплять: PerfectVerb = {
  name: Word('скреплять', 6),
  singular1stPerson: Word('скрепляю', 6),
  singular2ndPerson: Word('скрепляешь', 6),
  singular3rdPerson: Word('скрепляет', 6),
  plural1stPerson: Word('скрепляем', 6),
  plural2ndPerson: Word('скрепляете', 6),
  plural3rdPerson: Word('скрепляют', 6),
  masculinePast: Word('скреплял', 6),
  femininePast: Word('скрепляла', 6),
  neuterPast: Word('скрепляло', 6),
  pluralPast: Word('скрепляли', 6),
  imperativeInformal: Word('скрепляй', 6),
  imperativeFormal: Word('скрепляйте', 6),
  imperfect: [],
};

perfectVerbs.set(скреплять.name.text, скреплять);

export { скреплять };