import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const похохатывать: PerfectVerb = {
  name: Word('похохатывать', 5),
  singular1stPerson: Word('похохатываю', 5),
  singular2ndPerson: Word('похохатываешь', 5),
  singular3rdPerson: Word('похохатывает', 5),
  plural1stPerson: Word('похохатываем', 5),
  plural2ndPerson: Word('похохатываете', 5),
  plural3rdPerson: Word('похохатывают', 5),
  masculinePast: Word('похохатывал', 5),
  femininePast: Word('похохатывала', 5),
  neuterPast: Word('похохатывало', 5),
  pluralPast: Word('похохатывали', 5),
  imperativeInformal: Word('похохатывай', 5),
  imperativeFormal: Word('похохатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(похохатывать.name.text, похохатывать);

export { похохатывать };