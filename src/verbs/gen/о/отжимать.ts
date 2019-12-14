import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отжимать: PerfectVerb = {
  name: Word('отжимать', 5),
  singular1stPerson: Word('отжимаю', 5),
  singular2ndPerson: Word('отжимаешь', 5),
  singular3rdPerson: Word('отжимает', 5),
  plural1stPerson: Word('отжимаем', 5),
  plural2ndPerson: Word('отжимаете', 5),
  plural3rdPerson: Word('отжимают', 5),
  masculinePast: Word('отжимал', 5),
  femininePast: Word('отжимала', 5),
  neuterPast: Word('отжимало', 5),
  pluralPast: Word('отжимали', 5),
  imperativeInformal: Word('отжимай', 5),
  imperativeFormal: Word('отжимайте', 5),
  imperfect: [],
};

perfectVerbs.set(отжимать.name.text, отжимать);

export { отжимать };