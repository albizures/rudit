import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впечатлять: PerfectVerb = {
  name: Word('впечатлять', 7),
  singular1stPerson: Word('впечатляю', 7),
  singular2ndPerson: Word('впечатляешь', 7),
  singular3rdPerson: Word('впечатляет', 7),
  plural1stPerson: Word('впечатляем', 7),
  plural2ndPerson: Word('впечатляете', 7),
  plural3rdPerson: Word('впечатляют', 7),
  masculinePast: Word('впечатлял', 7),
  femininePast: Word('впечатляла', 7),
  neuterPast: Word('впечатляло', 7),
  pluralPast: Word('впечатляли', 7),
  imperativeInformal: Word('впечатляй', 7),
  imperativeFormal: Word('впечатляйте', 7),
  imperfect: [],
};

perfectVerbs.set(впечатлять.name.text, впечатлять);

export { впечатлять };