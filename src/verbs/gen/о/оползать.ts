import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оползать: PerfectVerb = {
  name: Word('оползать', 5),
  singular1stPerson: Word('оползаю', 5),
  singular2ndPerson: Word('оползаешь', 5),
  singular3rdPerson: Word('оползает', 5),
  plural1stPerson: Word('оползаем', 5),
  plural2ndPerson: Word('оползаете', 5),
  plural3rdPerson: Word('оползают', 5),
  masculinePast: Word('оползал', 5),
  femininePast: Word('оползала', 5),
  neuterPast: Word('оползало', 5),
  pluralPast: Word('оползали', 5),
  imperativeInformal: Word('оползай', 5),
  imperativeFormal: Word('оползайте', 5),
  imperfect: [],
};

perfectVerbs.set(оползать.name.text, оползать);

export { оползать };