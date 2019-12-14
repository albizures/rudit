import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наползать: PerfectVerb = {
  name: Word('наползать', 3),
  singular1stPerson: Word('наползаю', 3),
  singular2ndPerson: Word('наползаешь', 3),
  singular3rdPerson: Word('наползает', 3),
  plural1stPerson: Word('наползаем', 3),
  plural2ndPerson: Word('наползаете', 3),
  plural3rdPerson: Word('наползают', 3),
  masculinePast: Word('наползал', 3),
  femininePast: Word('наползала', 3),
  neuterPast: Word('наползало', 3),
  pluralPast: Word('наползали', 3),
  imperativeInformal: Word('наползай', 3),
  imperativeFormal: Word('наползайте', 3),
  imperfect: [],
};

perfectVerbs.set(наползать.name.text, наползать);

export { наползать };