import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замызгать: PerfectVerb = {
  name: Word('замызгать', 3),
  singular1stPerson: Word('замызгаю', 3),
  singular2ndPerson: Word('замызгаешь', 3),
  singular3rdPerson: Word('замызгает', 3),
  plural1stPerson: Word('замызгаем', 3),
  plural2ndPerson: Word('замызгаете', 3),
  plural3rdPerson: Word('замызгают', 3),
  masculinePast: Word('замызгал', 3),
  femininePast: Word('замызгала', 3),
  neuterPast: Word('замызгало', 3),
  pluralPast: Word('замызгали', 3),
  imperativeInformal: Word('замызгай', 3),
  imperativeFormal: Word('замызгайте', 3),
  imperfect: [],
};

perfectVerbs.set(замызгать.name.text, замызгать);

export { замызгать };