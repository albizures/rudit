import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемешать: PerfectVerb = {
  name: Word('перемешать', 7),
  singular1stPerson: Word('перемешаю', 7),
  singular2ndPerson: Word('перемешаешь', 7),
  singular3rdPerson: Word('перемешает', 7),
  plural1stPerson: Word('перемешаем', 7),
  plural2ndPerson: Word('перемешаете', 7),
  plural3rdPerson: Word('перемешают', 7),
  masculinePast: Word('перемешал', 7),
  femininePast: Word('перемешала', 7),
  neuterPast: Word('перемешало', 7),
  pluralPast: Word('перемешали', 7),
  imperativeInformal: Word('перемешай', 7),
  imperativeFormal: Word('перемешайте', 7),
  imperfect: [],
};

perfectVerbs.set(перемешать.name.text, перемешать);

export { перемешать };