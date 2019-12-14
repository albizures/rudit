import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрамлять: PerfectVerb = {
  name: Word('обрамлять', 6),
  singular1stPerson: Word('обрамляю', 6),
  singular2ndPerson: Word('обрамляешь', 6),
  singular3rdPerson: Word('обрамляет', 6),
  plural1stPerson: Word('обрамляем', 6),
  plural2ndPerson: Word('обрамляете', 6),
  plural3rdPerson: Word('обрамляют', 6),
  masculinePast: Word('обрамлял', 6),
  femininePast: Word('обрамляла', 6),
  neuterPast: Word('обрамляло', 6),
  pluralPast: Word('обрамляли', 6),
  imperativeInformal: Word('обрамляй', 6),
  imperativeFormal: Word('обрамляйте', 6),
  imperfect: [],
};

perfectVerbs.set(обрамлять.name.text, обрамлять);

export { обрамлять };