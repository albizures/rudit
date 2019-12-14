import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const знать: PerfectVerb = {
  name: Word('знать', 2),
  singular1stPerson: Word('знаю', 2),
  singular2ndPerson: Word('знаешь', 2),
  singular3rdPerson: Word('знает', 2),
  plural1stPerson: Word('знаем', 2),
  plural2ndPerson: Word('знаете', 2),
  plural3rdPerson: Word('знают', 2),
  masculinePast: Word('знал', 2),
  femininePast: Word('знала', 2),
  neuterPast: Word('знало', 2),
  pluralPast: Word('знали', 2),
  imperativeInformal: Word('знай', 2),
  imperativeFormal: Word('знайте', 2),
  imperfect: ['узнать'],
};

perfectVerbs.set(знать.name.text, знать);

export { знать };