import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемалывать: PerfectVerb = {
  name: Word('перемалывать', 5),
  singular1stPerson: Word('перемалываю', 5),
  singular2ndPerson: Word('перемалываешь', 5),
  singular3rdPerson: Word('перемалывает', 5),
  plural1stPerson: Word('перемалываем', 5),
  plural2ndPerson: Word('перемалываете', 5),
  plural3rdPerson: Word('перемалывают', 5),
  masculinePast: Word('перемалывал', 5),
  femininePast: Word('перемалывала', 5),
  neuterPast: Word('перемалывало', 5),
  pluralPast: Word('перемалывали', 5),
  imperativeInformal: Word('перемалывай', 5),
  imperativeFormal: Word('перемалывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перемалывать.name.text, перемалывать);

export { перемалывать };