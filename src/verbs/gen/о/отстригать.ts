import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстригать: PerfectVerb = {
  name: Word('отстригать', 7),
  singular1stPerson: Word('отстригаю', 7),
  singular2ndPerson: Word('отстригаешь', 7),
  singular3rdPerson: Word('отстригает', 7),
  plural1stPerson: Word('отстригаем', 7),
  plural2ndPerson: Word('отстригаете', 7),
  plural3rdPerson: Word('отстригают', 7),
  masculinePast: Word('отстригал', 7),
  femininePast: Word('отстригала', 7),
  neuterPast: Word('отстригало', 7),
  pluralPast: Word('отстригали', 7),
  imperativeInformal: Word('отстригай', 7),
  imperativeFormal: Word('отстригайте', 7),
  imperfect: [],
};

perfectVerbs.set(отстригать.name.text, отстригать);

export { отстригать };