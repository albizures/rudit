import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выколупывать: PerfectVerb = {
  name: Word('выколупывать', 5),
  singular1stPerson: Word('выколупываю', 5),
  singular2ndPerson: Word('выколупываешь', 5),
  singular3rdPerson: Word('выколупывает', 5),
  plural1stPerson: Word('выколупываем', 5),
  plural2ndPerson: Word('выколупываете', 5),
  plural3rdPerson: Word('выколупывают', 5),
  masculinePast: Word('выколупывал', 5),
  femininePast: Word('выколупывала', 5),
  neuterPast: Word('выколупывало', 5),
  pluralPast: Word('выколупывали', 5),
  imperativeInformal: Word('выколупывай', 5),
  imperativeFormal: Word('выколупывайте', 5),
  imperfect: [],
};

perfectVerbs.set(выколупывать.name.text, выколупывать);

export { выколупывать };