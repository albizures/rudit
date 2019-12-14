import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const режиссировать: PerfectVerb = {
  name: Word('режиссировать', 6),
  singular1stPerson: Word('режиссирую', 6),
  singular2ndPerson: Word('режиссируешь', 6),
  singular3rdPerson: Word('режиссирует', 6),
  plural1stPerson: Word('режиссируем', 6),
  plural2ndPerson: Word('режиссируете', 6),
  plural3rdPerson: Word('режиссируют', 6),
  masculinePast: Word('режиссировал', 6),
  femininePast: Word('режиссировала', 6),
  neuterPast: Word('режиссировало', 6),
  pluralPast: Word('режиссировали', 6),
  imperativeInformal: Word('режиссируй', 6),
  imperativeFormal: Word('режиссируйте', 6),
  imperfect: [],
};

perfectVerbs.set(режиссировать.name.text, режиссировать);

export { режиссировать };