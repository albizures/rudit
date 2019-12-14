import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распинать: PerfectVerb = {
  name: Word('распинать', 6),
  singular1stPerson: Word('распинаю', 6),
  singular2ndPerson: Word('распинаешь', 6),
  singular3rdPerson: Word('распинает', 6),
  plural1stPerson: Word('распинаем', 6),
  plural2ndPerson: Word('распинаете', 6),
  plural3rdPerson: Word('распинают', 6),
  masculinePast: Word('распинал', 6),
  femininePast: Word('распинала', 6),
  neuterPast: Word('распинало', 6),
  pluralPast: Word('распинали', 6),
  imperativeInformal: Word('распинай', 6),
  imperativeFormal: Word('распинайте', 6),
  imperfect: [],
};

perfectVerbs.set(распинать.name.text, распинать);

export { распинать };