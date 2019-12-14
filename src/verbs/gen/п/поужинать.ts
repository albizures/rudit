import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поужинать: PerfectVerb = {
  name: Word('поужинать', 2),
  singular1stPerson: Word('поужинаю', 2),
  singular2ndPerson: Word('поужинаешь', 2),
  singular3rdPerson: Word('поужинает', 2),
  plural1stPerson: Word('поужинаем', 2),
  plural2ndPerson: Word('поужинаете', 2),
  plural3rdPerson: Word('поужинают', 2),
  masculinePast: Word('поужинал', 2),
  femininePast: Word('поужинала', 2),
  neuterPast: Word('поужинало', 2),
  pluralPast: Word('поужинали', 2),
  imperativeInformal: Word('поужинай', 2),
  imperativeFormal: Word('поужинайте', 2),
  imperfect: [],
};

perfectVerbs.set(поужинать.name.text, поужинать);

export { поужинать };