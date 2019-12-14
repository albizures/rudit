import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const редуцировать: PerfectVerb = {
  name: Word('редуцировать', 5),
  singular1stPerson: Word('редуцирую', 5),
  singular2ndPerson: Word('редуцируешь', 5),
  singular3rdPerson: Word('редуцирует', 5),
  plural1stPerson: Word('редуцируем', 5),
  plural2ndPerson: Word('редуцируете', 5),
  plural3rdPerson: Word('редуцируют', 5),
  masculinePast: Word('редуцировал', 5),
  femininePast: Word('редуцировала', 5),
  neuterPast: Word('редуцировало', 5),
  pluralPast: Word('редуцировали', 5),
  imperativeInformal: Word('редуцируй', 5),
  imperativeFormal: Word('редуцируйте', 5),
  imperfect: [],
};

perfectVerbs.set(редуцировать.name.text, редуцировать);

export { редуцировать };