import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспалять: PerfectVerb = {
  name: Word('воспалять', 6),
  singular1stPerson: Word('воспаляю', 6),
  singular2ndPerson: Word('воспаляешь', 6),
  singular3rdPerson: Word('воспаляет', 6),
  plural1stPerson: Word('воспаляем', 6),
  plural2ndPerson: Word('воспаляете', 6),
  plural3rdPerson: Word('воспаляют', 6),
  masculinePast: Word('воспалял', 6),
  femininePast: Word('воспаляла', 6),
  neuterPast: Word('воспаляло', 6),
  pluralPast: Word('воспаляли', 6),
  imperativeInformal: Word('воспаляй', 6),
  imperativeFormal: Word('воспаляйте', 6),
  imperfect: [],
};

perfectVerbs.set(воспалять.name.text, воспалять);

export { воспалять };