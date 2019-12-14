import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекатывать: PerfectVerb = {
  name: Word('перекатывать', 5),
  singular1stPerson: Word('перекатываю', 5),
  singular2ndPerson: Word('перекатываешь', 5),
  singular3rdPerson: Word('перекатывает', 5),
  plural1stPerson: Word('перекатываем', 5),
  plural2ndPerson: Word('перекатываете', 5),
  plural3rdPerson: Word('перекатывают', 5),
  masculinePast: Word('перекатывал', 5),
  femininePast: Word('перекатывала', 5),
  neuterPast: Word('перекатывало', 5),
  pluralPast: Word('перекатывали', 5),
  imperativeInformal: Word('перекатывай', 5),
  imperativeFormal: Word('перекатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекатывать.name.text, перекатывать);

export { перекатывать };