import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дебютировать: PerfectVerb = {
  name: Word('дебютировать', 5),
  singular1stPerson: Word('дебютирую', 5),
  singular2ndPerson: Word('дебютируешь', 5),
  singular3rdPerson: Word('дебютирует', 5),
  plural1stPerson: Word('дебютируем', 5),
  plural2ndPerson: Word('дебютируете', 5),
  plural3rdPerson: Word('дебютируют', 5),
  masculinePast: Word('дебютировал', 5),
  femininePast: Word('дебютировала', 5),
  neuterPast: Word('дебютировало', 5),
  pluralPast: Word('дебютировали', 5),
  imperativeInformal: Word('дебютируй', 5),
  imperativeFormal: Word('дебютируйте', 5),
  imperfect: [],
};

perfectVerbs.set(дебютировать.name.text, дебютировать);

export { дебютировать };