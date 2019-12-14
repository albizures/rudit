import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откладывать: PerfectVerb = {
  name: Word('откладывать', 4),
  singular1stPerson: Word('откладываю', 4),
  singular2ndPerson: Word('откладываешь', 4),
  singular3rdPerson: Word('откладывает', 4),
  plural1stPerson: Word('откладываем', 4),
  plural2ndPerson: Word('откладываете', 4),
  plural3rdPerson: Word('откладывают', 4),
  masculinePast: Word('откладывал', 4),
  femininePast: Word('откладывала', 4),
  neuterPast: Word('откладывало', 4),
  pluralPast: Word('откладывали', 4),
  imperativeInformal: Word('откладывай', 4),
  imperativeFormal: Word('откладывайте', 4),
  imperfect: ['отложить'],
};

perfectVerbs.set(откладывать.name.text, откладывать);

export { откладывать };