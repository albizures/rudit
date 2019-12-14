import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегораживать: PerfectVerb = {
  name: Word('перегораживать', 7),
  singular1stPerson: Word('перегораживаю', 7),
  singular2ndPerson: Word('перегораживаешь', 7),
  singular3rdPerson: Word('перегораживает', 7),
  plural1stPerson: Word('перегораживаем', 7),
  plural2ndPerson: Word('перегораживаете', 7),
  plural3rdPerson: Word('перегораживают', 7),
  masculinePast: Word('перегораживал', 7),
  femininePast: Word('перегораживала', 7),
  neuterPast: Word('перегораживало', 7),
  pluralPast: Word('перегораживали', 7),
  imperativeInformal: Word('перегораживай', 7),
  imperativeFormal: Word('перегораживайте', 7),
  imperfect: [],
};

perfectVerbs.set(перегораживать.name.text, перегораживать);

export { перегораживать };