import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отужинать: PerfectVerb = {
  name: Word('отужинать', 2),
  singular1stPerson: Word('отужинаю', 2),
  singular2ndPerson: Word('отужинаешь', 2),
  singular3rdPerson: Word('отужинает', 2),
  plural1stPerson: Word('отужинаем', 2),
  plural2ndPerson: Word('отужинаете', 2),
  plural3rdPerson: Word('отужинают', 2),
  masculinePast: Word('отужинал', 2),
  femininePast: Word('отужинала', 2),
  neuterPast: Word('отужинало', 2),
  pluralPast: Word('отужинали', 2),
  imperativeInformal: Word('отужинай', 2),
  imperativeFormal: Word('отужинайте', 2),
  imperfect: [],
};

perfectVerbs.set(отужинать.name.text, отужинать);

export { отужинать };