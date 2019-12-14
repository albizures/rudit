import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбавлять: PerfectVerb = {
  name: Word('разбавлять', 7),
  singular1stPerson: Word('разбавляю', 7),
  singular2ndPerson: Word('разбавляешь', 7),
  singular3rdPerson: Word('разбавляет', 7),
  plural1stPerson: Word('разбавляем', 7),
  plural2ndPerson: Word('разбавляете', 7),
  plural3rdPerson: Word('разбавляют', 7),
  masculinePast: Word('разбавлял', 7),
  femininePast: Word('разбавляла', 7),
  neuterPast: Word('разбавляло', 7),
  pluralPast: Word('разбавляли', 7),
  imperativeInformal: Word('разбавляй', 7),
  imperativeFormal: Word('разбавляйте', 7),
  imperfect: ['разбавить'],
};

perfectVerbs.set(разбавлять.name.text, разбавлять);

export { разбавлять };