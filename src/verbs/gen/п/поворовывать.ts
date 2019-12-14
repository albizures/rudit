import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поворовывать: PerfectVerb = {
  name: Word('поворовывать', 5),
  singular1stPerson: Word('поворовываю', 5),
  singular2ndPerson: Word('поворовываешь', 5),
  singular3rdPerson: Word('поворовывает', 5),
  plural1stPerson: Word('поворовываем', 5),
  plural2ndPerson: Word('поворовываете', 5),
  plural3rdPerson: Word('поворовывают', 5),
  masculinePast: Word('поворовывал', 5),
  femininePast: Word('поворовывала', 5),
  neuterPast: Word('поворовывало', 5),
  pluralPast: Word('поворовывали', 5),
  imperativeInformal: Word('поворовывай', 5),
  imperativeFormal: Word('поворовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(поворовывать.name.text, поворовывать);

export { поворовывать };