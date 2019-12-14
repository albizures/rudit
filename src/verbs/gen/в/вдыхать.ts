import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вдыхать: PerfectVerb = {
  name: Word('вдыхать', 4),
  singular1stPerson: Word('вдыхаю', 4),
  singular2ndPerson: Word('вдыхаешь', 4),
  singular3rdPerson: Word('вдыхает', 4),
  plural1stPerson: Word('вдыхаем', 4),
  plural2ndPerson: Word('вдыхаете', 4),
  plural3rdPerson: Word('вдыхают', 4),
  masculinePast: Word('вдыхал', 4),
  femininePast: Word('вдыхала', 4),
  neuterPast: Word('вдыхало', 4),
  pluralPast: Word('вдыхали', 4),
  imperativeInformal: Word('вдыхай', 4),
  imperativeFormal: Word('вдыхайте', 4),
  imperfect: [],
};

perfectVerbs.set(вдыхать.name.text, вдыхать);

export { вдыхать };