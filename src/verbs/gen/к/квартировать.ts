import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const квартировать: PerfectVerb = {
  name: Word('квартировать', 9),
  singular1stPerson: Word('квартирую', 7),
  singular2ndPerson: Word('квартируешь', 7),
  singular3rdPerson: Word('квартирует', 7),
  plural1stPerson: Word('квартируем', 7),
  plural2ndPerson: Word('квартируете', 7),
  plural3rdPerson: Word('квартируют', 7),
  masculinePast: Word('квартировал', 9),
  femininePast: Word('квартировала', 9),
  neuterPast: Word('квартировало', 9),
  pluralPast: Word('квартировали', 9),
  imperativeInformal: Word('квартируй', 7),
  imperativeFormal: Word('квартируйте', 7),
  imperfect: [],
};

perfectVerbs.set(квартировать.name.text, квартировать);

export { квартировать };