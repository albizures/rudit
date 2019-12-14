import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умолять: PerfectVerb = {
  name: Word('умолять', 4),
  singular1stPerson: Word('умоляю', 4),
  singular2ndPerson: Word('умоляешь', 4),
  singular3rdPerson: Word('умоляет', 4),
  plural1stPerson: Word('умоляем', 4),
  plural2ndPerson: Word('умоляете', 4),
  plural3rdPerson: Word('умоляют', 4),
  masculinePast: Word('умолял', 4),
  femininePast: Word('умоляла', 4),
  neuterPast: Word('умоляло', 4),
  pluralPast: Word('умоляли', 4),
  imperativeInformal: Word('умоляй', 4),
  imperativeFormal: Word('умоляйте', 4),
  imperfect: ['умолить'],
};

perfectVerbs.set(умолять.name.text, умолять);

export { умолять };