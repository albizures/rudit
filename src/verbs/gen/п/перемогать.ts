import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемогать: PerfectVerb = {
  name: Word('перемогать', 7),
  singular1stPerson: Word('перемогаю', 7),
  singular2ndPerson: Word('перемогаешь', 7),
  singular3rdPerson: Word('перемогает', 7),
  plural1stPerson: Word('перемогаем', 7),
  plural2ndPerson: Word('перемогаете', 7),
  plural3rdPerson: Word('перемогают', 7),
  masculinePast: Word('перемогал', 7),
  femininePast: Word('перемогала', 7),
  neuterPast: Word('перемогало', 7),
  pluralPast: Word('перемогали', 7),
  imperativeInformal: Word('перемогай', 7),
  imperativeFormal: Word('перемогайте', 7),
  imperfect: [],
};

perfectVerbs.set(перемогать.name.text, перемогать);

export { перемогать };