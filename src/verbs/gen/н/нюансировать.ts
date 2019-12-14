import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нюансировать: PerfectVerb = {
  name: Word('нюансировать', 5),
  singular1stPerson: Word('нюансирую', 5),
  singular2ndPerson: Word('нюансируешь', 5),
  singular3rdPerson: Word('нюансирует', 5),
  plural1stPerson: Word('нюансируем', 5),
  plural2ndPerson: Word('нюансируете', 5),
  plural3rdPerson: Word('нюансируют', 5),
  masculinePast: Word('нюансировал', 5),
  femininePast: Word('нюансировала', 5),
  neuterPast: Word('нюансировало', 5),
  pluralPast: Word('нюансировали', 5),
  imperativeInformal: Word('нюансируй', 5),
  imperativeFormal: Word('нюансируйте', 5),
  imperfect: [],
};

perfectVerbs.set(нюансировать.name.text, нюансировать);

export { нюансировать };