import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекатать: PerfectVerb = {
  name: Word('перекатать', 7),
  singular1stPerson: Word('перекатаю', 7),
  singular2ndPerson: Word('перекатаешь', 7),
  singular3rdPerson: Word('перекатает', 7),
  plural1stPerson: Word('перекатаем', 7),
  plural2ndPerson: Word('перекатаете', 7),
  plural3rdPerson: Word('перекатают', 7),
  masculinePast: Word('перекатал', 7),
  femininePast: Word('перекатала', 7),
  neuterPast: Word('перекатало', 7),
  pluralPast: Word('перекатали', 7),
  imperativeInformal: Word('перекатай', 7),
  imperativeFormal: Word('перекатайте', 7),
  imperfect: [],
};

perfectVerbs.set(перекатать.name.text, перекатать);

export { перекатать };