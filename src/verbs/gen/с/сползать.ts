import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сползать: PerfectVerb = {
  name: Word('сползать', 5),
  singular1stPerson: Word('сползаю', 5),
  singular2ndPerson: Word('сползаешь', 5),
  singular3rdPerson: Word('сползает', 5),
  plural1stPerson: Word('сползаем', 5),
  plural2ndPerson: Word('сползаете', 5),
  plural3rdPerson: Word('сползают', 5),
  masculinePast: Word('сползал', 5),
  femininePast: Word('сползала', 5),
  neuterPast: Word('сползало', 5),
  pluralPast: Word('сползали', 5),
  imperativeInformal: Word('сползай', 5),
  imperativeFormal: Word('сползайте', 5),
  imperfect: [],
};

perfectVerbs.set(сползать.name.text, сползать);

export { сползать };