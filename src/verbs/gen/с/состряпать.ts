import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const состряпать: PerfectVerb = {
  name: Word('состряпать', 5),
  singular1stPerson: Word('состряпаю', 5),
  singular2ndPerson: Word('состряпаешь', 5),
  singular3rdPerson: Word('состряпает', 5),
  plural1stPerson: Word('состряпаем', 5),
  plural2ndPerson: Word('состряпаете', 5),
  plural3rdPerson: Word('состряпают', 5),
  masculinePast: Word('состряпал', 5),
  femininePast: Word('состряпала', 5),
  neuterPast: Word('состряпало', 5),
  pluralPast: Word('состряпали', 5),
  imperativeInformal: Word('состряпай', 5),
  imperativeFormal: Word('состряпайте', 5),
  imperfect: [],
};

perfectVerbs.set(состряпать.name.text, состряпать);

export { состряпать };