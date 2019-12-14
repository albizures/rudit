import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противопоставлять: PerfectVerb = {
  name: Word('противопоставлять', 14),
  singular1stPerson: Word('противопоставляю', 14),
  singular2ndPerson: Word('противопоставляешь', 14),
  singular3rdPerson: Word('противопоставляет', 14),
  plural1stPerson: Word('противопоставляем', 14),
  plural2ndPerson: Word('противопоставляете', 14),
  plural3rdPerson: Word('противопоставляют', 14),
  masculinePast: Word('противопоставлял', 14),
  femininePast: Word('противопоставляла', 14),
  neuterPast: Word('противопоставляло', 14),
  pluralPast: Word('противопоставляли', 14),
  imperativeInformal: Word('противопоставляй', 14),
  imperativeFormal: Word('противопоставляйте', 14),
  imperfect: ['противопоставить'],
};

perfectVerbs.set(противопоставлять.name.text, противопоставлять);

export { противопоставлять };