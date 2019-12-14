import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ужинать: PerfectVerb = {
  name: Word('ужинать', 4),
  singular1stPerson: Word('ужинаю', 4),
  singular2ndPerson: Word('ужинаешь', 4),
  singular3rdPerson: Word('ужинает', 4),
  plural1stPerson: Word('ужинаем', 4),
  plural2ndPerson: Word('ужинаете', 4),
  plural3rdPerson: Word('ужинают', 4),
  masculinePast: Word('ужинал', 4),
  femininePast: Word('ужинала', 4),
  neuterPast: Word('ужинало', 4),
  pluralPast: Word('ужинали', 4),
  imperativeInformal: Word('ужинай', 4),
  imperativeFormal: Word('ужинайте', 4),
  imperfect: [],
};

perfectVerbs.set(ужинать.name.text, ужинать);

export { ужинать };