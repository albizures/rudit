import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перестрадать: PerfectVerb = {
  name: Word('перестрадать', 9),
  singular1stPerson: Word('перестрадаю', 9),
  singular2ndPerson: Word('перестрадаешь', 9),
  singular3rdPerson: Word('перестрадает', 9),
  plural1stPerson: Word('перестрадаем', 9),
  plural2ndPerson: Word('перестрадаете', 9),
  plural3rdPerson: Word('перестрадают', 9),
  masculinePast: Word('перестрадал', 9),
  femininePast: Word('перестрадала', 9),
  neuterPast: Word('перестрадало', 9),
  pluralPast: Word('перестрадали', 9),
  imperativeInformal: Word('перестрадай', 9),
  imperativeFormal: Word('перестрадайте', 9),
  imperfect: [],
};

perfectVerbs.set(перестрадать.name.text, перестрадать);

export { перестрадать };