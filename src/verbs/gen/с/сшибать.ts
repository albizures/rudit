import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сшибать: PerfectVerb = {
  name: Word('сшибать', 4),
  singular1stPerson: Word('сшибаю', 4),
  singular2ndPerson: Word('сшибаешь', 4),
  singular3rdPerson: Word('сшибает', 4),
  plural1stPerson: Word('сшибаем', 4),
  plural2ndPerson: Word('сшибаете', 4),
  plural3rdPerson: Word('сшибают', 4),
  masculinePast: Word('сшибал', 4),
  femininePast: Word('сшибала', 4),
  neuterPast: Word('сшибало', 4),
  pluralPast: Word('сшибали', 4),
  imperativeInformal: Word('сшибай', 4),
  imperativeFormal: Word('сшибайте', 4),
  imperfect: [],
};

perfectVerbs.set(сшибать.name.text, сшибать);

export { сшибать };