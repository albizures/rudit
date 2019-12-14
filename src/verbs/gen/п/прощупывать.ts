import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прощупывать: PerfectVerb = {
  name: Word('прощупывать', 4),
  singular1stPerson: Word('прощупываю', 4),
  singular2ndPerson: Word('прощупываешь', 4),
  singular3rdPerson: Word('прощупывает', 4),
  plural1stPerson: Word('прощупываем', 4),
  plural2ndPerson: Word('прощупываете', 4),
  plural3rdPerson: Word('прощупывают', 4),
  masculinePast: Word('прощупывал', 4),
  femininePast: Word('прощупывала', 4),
  neuterPast: Word('прощупывало', 4),
  pluralPast: Word('прощупывали', 4),
  imperativeInformal: Word('прощупывай', 4),
  imperativeFormal: Word('прощупывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прощупывать.name.text, прощупывать);

export { прощупывать };