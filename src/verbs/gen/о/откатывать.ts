import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откатывать: PerfectVerb = {
  name: Word('откатывать', 3),
  singular1stPerson: Word('откатываю', 3),
  singular2ndPerson: Word('откатываешь', 3),
  singular3rdPerson: Word('откатывает', 3),
  plural1stPerson: Word('откатываем', 3),
  plural2ndPerson: Word('откатываете', 3),
  plural3rdPerson: Word('откатывают', 3),
  masculinePast: Word('откатывал', 3),
  femininePast: Word('откатывала', 3),
  neuterPast: Word('откатывало', 3),
  pluralPast: Word('откатывали', 3),
  imperativeInformal: Word('откатывай', 3),
  imperativeFormal: Word('откатывайте', 3),
  imperfect: [],
};

perfectVerbs.set(откатывать.name.text, откатывать);

export { откатывать };