import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ответвлять: PerfectVerb = {
  name: Word('ответвлять', 7),
  singular1stPerson: Word('ответвляю', 7),
  singular2ndPerson: Word('ответвляешь', 7),
  singular3rdPerson: Word('ответвляет', 7),
  plural1stPerson: Word('ответвляем', 7),
  plural2ndPerson: Word('ответвляете', 7),
  plural3rdPerson: Word('ответвляют', 7),
  masculinePast: Word('ответвлял', 7),
  femininePast: Word('ответвляла', 7),
  neuterPast: Word('ответвляло', 7),
  pluralPast: Word('ответвляли', 7),
  imperativeInformal: Word('ответвляй', 7),
  imperativeFormal: Word('ответвляйте', 7),
  imperfect: [],
};

perfectVerbs.set(ответвлять.name.text, ответвлять);

export { ответвлять };