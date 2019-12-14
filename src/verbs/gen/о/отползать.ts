import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отползать: PerfectVerb = {
  name: Word('отползать', 3),
  singular1stPerson: Word('отползаю', 3),
  singular2ndPerson: Word('отползаешь', 3),
  singular3rdPerson: Word('отползает', 3),
  plural1stPerson: Word('отползаем', 3),
  plural2ndPerson: Word('отползаете', 3),
  plural3rdPerson: Word('отползают', 3),
  masculinePast: Word('отползал', 3),
  femininePast: Word('отползала', 3),
  neuterPast: Word('отползало', 3),
  pluralPast: Word('отползали', 3),
  imperativeInformal: Word('отползай', 3),
  imperativeFormal: Word('отползайте', 3),
  imperfect: [],
};

perfectVerbs.set(отползать.name.text, отползать);

export { отползать };