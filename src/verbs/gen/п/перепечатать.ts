import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепечатать: PerfectVerb = {
  name: Word('перепечатать', 7),
  singular1stPerson: Word('перепечатаю', 7),
  singular2ndPerson: Word('перепечатаешь', 7),
  singular3rdPerson: Word('перепечатает', 7),
  plural1stPerson: Word('перепечатаем', 7),
  plural2ndPerson: Word('перепечатаете', 7),
  plural3rdPerson: Word('перепечатают', 7),
  masculinePast: Word('перепечатал', 7),
  femininePast: Word('перепечатала', 7),
  neuterPast: Word('перепечатало', 7),
  pluralPast: Word('перепечатали', 7),
  imperativeInformal: Word('перепечатай', 7),
  imperativeFormal: Word('перепечатайте', 7),
  imperfect: [],
};

perfectVerbs.set(перепечатать.name.text, перепечатать);

export { перепечатать };