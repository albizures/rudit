import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стереотипировать: PerfectVerb = {
  name: Word('стереотипировать', 9),
  singular1stPerson: Word('стереотипирую', 9),
  singular2ndPerson: Word('стереотипируешь', 9),
  singular3rdPerson: Word('стереотипирует', 9),
  plural1stPerson: Word('стереотипируем', 9),
  plural2ndPerson: Word('стереотипируете', 9),
  plural3rdPerson: Word('стереотипируют', 9),
  masculinePast: Word('стереотипировал', 9),
  femininePast: Word('стереотипировала', 9),
  neuterPast: Word('стереотипировало', 9),
  pluralPast: Word('стереотипировали', 9),
  imperativeInformal: Word('стереотипируй', 9),
  imperativeFormal: Word('стереотипируйте', 9),
  imperfect: [],
};

perfectVerbs.set(стереотипировать.name.text, стереотипировать);

export { стереотипировать };