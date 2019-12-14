import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умерщвлять: PerfectVerb = {
  name: Word('умерщвлять', 7),
  singular1stPerson: Word('умерщвляю', 7),
  singular2ndPerson: Word('умерщвляешь', 7),
  singular3rdPerson: Word('умерщвляет', 7),
  plural1stPerson: Word('умерщвляем', 7),
  plural2ndPerson: Word('умерщвляете', 7),
  plural3rdPerson: Word('умерщвляют', 7),
  masculinePast: Word('умерщвлял', 7),
  femininePast: Word('умерщвляла', 7),
  neuterPast: Word('умерщвляло', 7),
  pluralPast: Word('умерщвляли', 7),
  imperativeInformal: Word('умерщвляй', 7),
  imperativeFormal: Word('умерщвляйте', 7),
  imperfect: [],
};

perfectVerbs.set(умерщвлять.name.text, умерщвлять);

export { умерщвлять };