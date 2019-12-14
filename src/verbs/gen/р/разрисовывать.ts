import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрисовывать: PerfectVerb = {
  name: Word('разрисовывать', 6),
  singular1stPerson: Word('разрисовываю', 6),
  singular2ndPerson: Word('разрисовываешь', 6),
  singular3rdPerson: Word('разрисовывает', 6),
  plural1stPerson: Word('разрисовываем', 6),
  plural2ndPerson: Word('разрисовываете', 6),
  plural3rdPerson: Word('разрисовывают', 6),
  masculinePast: Word('разрисовывал', 6),
  femininePast: Word('разрисовывала', 6),
  neuterPast: Word('разрисовывало', 6),
  pluralPast: Word('разрисовывали', 6),
  imperativeInformal: Word('разрисовывай', 6),
  imperativeFormal: Word('разрисовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(разрисовывать.name.text, разрисовывать);

export { разрисовывать };