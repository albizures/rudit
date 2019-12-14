import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усугублять: PerfectVerb = {
  name: Word('усугублять', 7),
  singular1stPerson: Word('усугубляю', 7),
  singular2ndPerson: Word('усугубляешь', 7),
  singular3rdPerson: Word('усугубляет', 7),
  plural1stPerson: Word('усугубляем', 7),
  plural2ndPerson: Word('усугубляете', 7),
  plural3rdPerson: Word('усугубляют', 7),
  masculinePast: Word('усугублял', 7),
  femininePast: Word('усугубляла', 7),
  neuterPast: Word('усугубляло', 7),
  pluralPast: Word('усугубляли', 7),
  imperativeInformal: Word('усугубляй', 7),
  imperativeFormal: Word('усугубляйте', 7),
  imperfect: ['усугубить'],
};

perfectVerbs.set(усугублять.name.text, усугублять);

export { усугублять };