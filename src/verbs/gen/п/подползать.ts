import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подползать: PerfectVerb = {
  name: Word('подползать', 7),
  singular1stPerson: Word('подползаю', 7),
  singular2ndPerson: Word('подползаешь', 7),
  singular3rdPerson: Word('подползает', 7),
  plural1stPerson: Word('подползаем', 7),
  plural2ndPerson: Word('подползаете', 7),
  plural3rdPerson: Word('подползают', 7),
  masculinePast: Word('подползал', 7),
  femininePast: Word('подползала', 7),
  neuterPast: Word('подползало', 7),
  pluralPast: Word('подползали', 7),
  imperativeInformal: Word('подползай', 7),
  imperativeFormal: Word('подползайте', 7),
  imperfect: [],
};

perfectVerbs.set(подползать.name.text, подползать);

export { подползать };