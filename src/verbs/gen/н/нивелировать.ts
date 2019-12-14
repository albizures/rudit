import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нивелировать: PerfectVerb = {
  name: Word('нивелировать', 5),
  singular1stPerson: Word('нивелирую', 5),
  singular2ndPerson: Word('нивелируешь', 5),
  singular3rdPerson: Word('нивелирует', 5),
  plural1stPerson: Word('нивелируем', 5),
  plural2ndPerson: Word('нивелируете', 5),
  plural3rdPerson: Word('нивелируют', 5),
  masculinePast: Word('нивелировал', 5),
  femininePast: Word('нивелировала', 5),
  neuterPast: Word('нивелировало', 5),
  pluralPast: Word('нивелировали', 5),
  imperativeInformal: Word('нивелируй', 5),
  imperativeFormal: Word('нивелируйте', 5),
  imperfect: [],
};

perfectVerbs.set(нивелировать.name.text, нивелировать);

export { нивелировать };