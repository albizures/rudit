import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расшатывать: PerfectVerb = {
  name: Word('расшатывать', 4),
  singular1stPerson: Word('расшатываю', 4),
  singular2ndPerson: Word('расшатываешь', 4),
  singular3rdPerson: Word('расшатывает', 4),
  plural1stPerson: Word('расшатываем', 4),
  plural2ndPerson: Word('расшатываете', 4),
  plural3rdPerson: Word('расшатывают', 4),
  masculinePast: Word('расшатывал', 4),
  femininePast: Word('расшатывала', 4),
  neuterPast: Word('расшатывало', 4),
  pluralPast: Word('расшатывали', 4),
  imperativeInformal: Word('расшатывай', 4),
  imperativeFormal: Word('расшатывайте', 4),
  imperfect: [],
};

perfectVerbs.set(расшатывать.name.text, расшатывать);

export { расшатывать };