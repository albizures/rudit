import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const печатать: PerfectVerb = {
  name: Word('печатать', 3),
  singular1stPerson: Word('печатаю', 3),
  singular2ndPerson: Word('печатаешь', 3),
  singular3rdPerson: Word('печатает', 3),
  plural1stPerson: Word('печатаем', 3),
  plural2ndPerson: Word('печатаете', 3),
  plural3rdPerson: Word('печатают', 3),
  masculinePast: Word('печатал', 3),
  femininePast: Word('печатала', 3),
  neuterPast: Word('печатало', 3),
  pluralPast: Word('печатали', 3),
  imperativeInformal: Word('печатай', 3),
  imperativeFormal: Word('печатайте', 3),
  imperfect: ['напечатать','распечатать'],
};

perfectVerbs.set(печатать.name.text, печатать);

export { печатать };