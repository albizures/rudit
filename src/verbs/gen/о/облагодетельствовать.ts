import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облагодетельствовать: PerfectVerb = {
  name: Word('облагодетельствовать', 7),
  singular1stPerson: Word('облагодетельствую', 7),
  singular2ndPerson: Word('облагодетельствуешь', 7),
  singular3rdPerson: Word('облагодетельствует', 7),
  plural1stPerson: Word('облагодетельствуем', 7),
  plural2ndPerson: Word('облагодетельствуете', 7),
  plural3rdPerson: Word('облагодетельствуют', 7),
  masculinePast: Word('облагодетельствовал', 7),
  femininePast: Word('облагодетельствовала', 7),
  neuterPast: Word('облагодетельствовало', 7),
  pluralPast: Word('облагодетельствовали', 7),
  imperativeInformal: Word('облагодетельствуй', 7),
  imperativeFormal: Word('облагодетельствуйте', 7),
  imperfect: [],
};

perfectVerbs.set(облагодетельствовать.name.text, облагодетельствовать);

export { облагодетельствовать };