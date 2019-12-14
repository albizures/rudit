import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшибать: PerfectVerb = {
  name: Word('отшибать', 5),
  singular1stPerson: Word('отшибаю', 5),
  singular2ndPerson: Word('отшибаешь', 5),
  singular3rdPerson: Word('отшибает', 5),
  plural1stPerson: Word('отшибаем', 5),
  plural2ndPerson: Word('отшибаете', 5),
  plural3rdPerson: Word('отшибают', 5),
  masculinePast: Word('отшибал', 5),
  femininePast: Word('отшибала', 5),
  neuterPast: Word('отшибало', 5),
  pluralPast: Word('отшибали', 5),
  imperativeInformal: Word('отшибай', 5),
  imperativeFormal: Word('отшибайте', 5),
  imperfect: [],
};

perfectVerbs.set(отшибать.name.text, отшибать);

export { отшибать };