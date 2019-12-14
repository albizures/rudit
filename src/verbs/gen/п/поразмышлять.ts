import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поразмышлять: PerfectVerb = {
  name: Word('поразмышлять', 9),
  singular1stPerson: Word('поразмышляю', 9),
  singular2ndPerson: Word('поразмышляешь', 9),
  singular3rdPerson: Word('поразмышляет', 9),
  plural1stPerson: Word('поразмышляем', 9),
  plural2ndPerson: Word('поразмышляете', 9),
  plural3rdPerson: Word('поразмышляют', 9),
  masculinePast: Word('поразмышлял', 9),
  femininePast: Word('поразмышляла', 9),
  neuterPast: Word('поразмышляло', 9),
  pluralPast: Word('поразмышляли', 9),
  imperativeInformal: Word('поразмышляй', 9),
  imperativeFormal: Word('поразмышляйте', 9),
  imperfect: [],
};

perfectVerbs.set(поразмышлять.name.text, поразмышлять);

export { поразмышлять };