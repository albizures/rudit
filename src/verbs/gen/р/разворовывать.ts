import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разворовывать: PerfectVerb = {
  name: Word('разворовывать', 6),
  singular1stPerson: Word('разворовываю', 6),
  singular2ndPerson: Word('разворовываешь', 6),
  singular3rdPerson: Word('разворовывает', 6),
  plural1stPerson: Word('разворовываем', 6),
  plural2ndPerson: Word('разворовываете', 6),
  plural3rdPerson: Word('разворовывают', 6),
  masculinePast: Word('разворовывал', 6),
  femininePast: Word('разворовывала', 6),
  neuterPast: Word('разворовывало', 6),
  pluralPast: Word('разворовывали', 6),
  imperativeInformal: Word('разворовывай', 6),
  imperativeFormal: Word('разворовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(разворовывать.name.text, разворовывать);

export { разворовывать };