import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выползать: PerfectVerb = {
  name: Word('выползать', 6),
  singular1stPerson: Word('выползаю', 6),
  singular2ndPerson: Word('выползаешь', 6),
  singular3rdPerson: Word('выползает', 6),
  plural1stPerson: Word('выползаем', 6),
  plural2ndPerson: Word('выползаете', 6),
  plural3rdPerson: Word('выползают', 6),
  masculinePast: Word('выползал', 6),
  femininePast: Word('выползала', 6),
  neuterPast: Word('выползало', 6),
  pluralPast: Word('выползали', 6),
  imperativeInformal: Word('выползай', 6),
  imperativeFormal: Word('выползайте', 6),
  imperfect: [],
};

perfectVerbs.set(выползать.name.text, выползать);

export { выползать };