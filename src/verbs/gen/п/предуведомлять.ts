import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const предуведомлять: PerfectVerb = {
  name: Word('предуведомлять', 11),
  singular1stPerson: Word('предуведомляю', 11),
  singular2ndPerson: Word('предуведомляешь', 11),
  singular3rdPerson: Word('предуведомляет', 11),
  plural1stPerson: Word('предуведомляем', 11),
  plural2ndPerson: Word('предуведомляете', 11),
  plural3rdPerson: Word('предуведомляют', 11),
  masculinePast: Word('предуведомлял', 11),
  femininePast: Word('предуведомляла', 11),
  neuterPast: Word('предуведомляло', 11),
  pluralPast: Word('предуведомляли', 11),
  imperativeInformal: Word('предуведомляй', 11),
  imperativeFormal: Word('предуведомляйте', 11),
  imperfect: [],
};

perfectVerbs.set(предуведомлять.name.text, предуведомлять);

export { предуведомлять };