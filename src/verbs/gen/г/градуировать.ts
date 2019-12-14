import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const градуировать: PerfectVerb = {
  name: Word('градуировать', 5),
  singular1stPerson: Word('градуирую', 5),
  singular2ndPerson: Word('градуируешь', 5),
  singular3rdPerson: Word('градуирует', 5),
  plural1stPerson: Word('градуируем', 5),
  plural2ndPerson: Word('градуируете', 5),
  plural3rdPerson: Word('градуируют', 5),
  masculinePast: Word('градуировал', 5),
  femininePast: Word('градуировала', 5),
  neuterPast: Word('градуировало', 5),
  pluralPast: Word('градуировали', 5),
  imperativeInformal: Word('градуируй', 5),
  imperativeFormal: Word('градуируйте', 5),
  imperfect: [],
};

perfectVerbs.set(градуировать.name.text, градуировать);

export { градуировать };