import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отжинать: PerfectVerb = {
  name: Word('отжинать', 5),
  singular1stPerson: Word('отжинаю', 5),
  singular2ndPerson: Word('отжинаешь', 5),
  singular3rdPerson: Word('отжинает', 5),
  plural1stPerson: Word('отжинаем', 5),
  plural2ndPerson: Word('отжинаете', 5),
  plural3rdPerson: Word('отжинают', 5),
  masculinePast: Word('отжинал', 5),
  femininePast: Word('отжинала', 5),
  neuterPast: Word('отжинало', 5),
  pluralPast: Word('отжинали', 5),
  imperativeInformal: Word('отжинай', 5),
  imperativeFormal: Word('отжинайте', 5),
  imperfect: [],
};

perfectVerbs.set(отжинать.name.text, отжинать);

export { отжинать };