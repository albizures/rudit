import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перенапрягать: PerfectVerb = {
  name: Word('перенапрягать', 10),
  singular1stPerson: Word('перенапрягаю', 10),
  singular2ndPerson: Word('перенапрягаешь', 10),
  singular3rdPerson: Word('перенапрягает', 10),
  plural1stPerson: Word('перенапрягаем', 10),
  plural2ndPerson: Word('перенапрягаете', 10),
  plural3rdPerson: Word('перенапрягают', 10),
  masculinePast: Word('перенапрягал', 10),
  femininePast: Word('перенапрягала', 10),
  neuterPast: Word('перенапрягало', 10),
  pluralPast: Word('перенапрягали', 10),
  imperativeInformal: Word('перенапрягай', 10),
  imperativeFormal: Word('перенапрягайте', 10),
  imperfect: [],
};

perfectVerbs.set(перенапрягать.name.text, перенапрягать);

export { перенапрягать };