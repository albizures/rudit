import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемазывать: PerfectVerb = {
  name: Word('перемазывать', 5),
  singular1stPerson: Word('перемазываю', 5),
  singular2ndPerson: Word('перемазываешь', 5),
  singular3rdPerson: Word('перемазывает', 5),
  plural1stPerson: Word('перемазываем', 5),
  plural2ndPerson: Word('перемазываете', 5),
  plural3rdPerson: Word('перемазывают', 5),
  masculinePast: Word('перемазывал', 5),
  femininePast: Word('перемазывала', 5),
  neuterPast: Word('перемазывало', 5),
  pluralPast: Word('перемазывали', 5),
  imperativeInformal: Word('перемазывай', 5),
  imperativeFormal: Word('перемазывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перемазывать.name.text, перемазывать);

export { перемазывать };