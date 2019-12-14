import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const складировать: PerfectVerb = {
  name: Word('складировать', 5),
  singular1stPerson: Word('складирую', 5),
  singular2ndPerson: Word('складируешь', 5),
  singular3rdPerson: Word('складирует', 5),
  plural1stPerson: Word('складируем', 5),
  plural2ndPerson: Word('складируете', 5),
  plural3rdPerson: Word('складируют', 5),
  masculinePast: Word('складировал', 5),
  femininePast: Word('складировала', 5),
  neuterPast: Word('складировало', 5),
  pluralPast: Word('складировали', 5),
  imperativeInformal: Word('складируй', 5),
  imperativeFormal: Word('складируйте', 5),
  imperfect: [],
};

perfectVerbs.set(складировать.name.text, складировать);

export { складировать };