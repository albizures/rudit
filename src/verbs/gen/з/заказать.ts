import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заказать: PerfectVerb = {
  name: Word('заказать', 5),
  singular1stPerson: Word('закажу', 5),
  singular2ndPerson: Word('закажешь', 3),
  singular3rdPerson: Word('закажет', 3),
  plural1stPerson: Word('закажем', 3),
  plural2ndPerson: Word('закажете', 3),
  plural3rdPerson: Word('закажут', 3),
  masculinePast: Word('заказал', 5),
  femininePast: Word('заказала', 5),
  neuterPast: Word('заказало', 5),
  pluralPast: Word('заказали', 5),
  imperativeInformal: Word('закажи', 5),
  imperativeFormal: Word('закажите', 5),
  imperfect: ['заказывать'],
};

perfectVerbs.set(заказать.name.text, заказать);

export { заказать };