import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перепадать: PerfectVerb = {
  name: Word('перепадать', 7),
  singular1stPerson: Word('перепадаю', 7),
  singular2ndPerson: Word('перепадаешь', 7),
  singular3rdPerson: Word('перепадает', 7),
  plural1stPerson: Word('перепадаем', 7),
  plural2ndPerson: Word('перепадаете', 7),
  plural3rdPerson: Word('перепадают', 7),
  masculinePast: Word('перепадал', 7),
  femininePast: Word('перепадала', 7),
  neuterPast: Word('перепадало', 7),
  pluralPast: Word('перепадали', 7),
  imperativeInformal: Word('перепадай', 7),
  imperativeFormal: Word('перепадайте', 7),
  imperfect: [],
};

perfectVerbs.set(перепадать.name.text, перепадать);

export { перепадать };