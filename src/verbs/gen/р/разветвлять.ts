import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разветвлять: PerfectVerb = {
  name: Word('разветвлять', 8),
  singular1stPerson: Word('разветвляю', 8),
  singular2ndPerson: Word('разветвляешь', 8),
  singular3rdPerson: Word('разветвляет', 8),
  plural1stPerson: Word('разветвляем', 8),
  plural2ndPerson: Word('разветвляете', 8),
  plural3rdPerson: Word('разветвляют', 8),
  masculinePast: Word('разветвлял', 8),
  femininePast: Word('разветвляла', 8),
  neuterPast: Word('разветвляло', 8),
  pluralPast: Word('разветвляли', 8),
  imperativeInformal: Word('разветвляй', 8),
  imperativeFormal: Word('разветвляйте', 8),
  imperfect: [],
};

perfectVerbs.set(разветвлять.name.text, разветвлять);

export { разветвлять };