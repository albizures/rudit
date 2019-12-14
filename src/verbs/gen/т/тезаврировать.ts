import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тезаврировать: PerfectVerb = {
  name: Word('тезаврировать', 6),
  singular1stPerson: Word('тезаврирую', 6),
  singular2ndPerson: Word('тезаврируешь', 6),
  singular3rdPerson: Word('тезаврирует', 6),
  plural1stPerson: Word('тезаврируем', 6),
  plural2ndPerson: Word('тезаврируете', 6),
  plural3rdPerson: Word('тезаврируют', 6),
  masculinePast: Word('тезаврировал', 6),
  femininePast: Word('тезаврировала', 6),
  neuterPast: Word('тезаврировало', 6),
  pluralPast: Word('тезаврировали', 6),
  imperativeInformal: Word('тезаврируй', 6),
  imperativeFormal: Word('тезаврируйте', 6),
  imperfect: [],
};

perfectVerbs.set(тезаврировать.name.text, тезаврировать);

export { тезаврировать };