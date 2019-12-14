import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укомплектовывать: PerfectVerb = {
  name: Word('укомплектовывать', 9),
  singular1stPerson: Word('укомплектовываю', 9),
  singular2ndPerson: Word('укомплектовываешь', 9),
  singular3rdPerson: Word('укомплектовывает', 9),
  plural1stPerson: Word('укомплектовываем', 9),
  plural2ndPerson: Word('укомплектовываете', 9),
  plural3rdPerson: Word('укомплектовывают', 9),
  masculinePast: Word('укомплектовывал', 9),
  femininePast: Word('укомплектовывала', 9),
  neuterPast: Word('укомплектовывало', 9),
  pluralPast: Word('укомплектовывали', 9),
  imperativeInformal: Word('укомплектовывай', 9),
  imperativeFormal: Word('укомплектовывайте', 9),
  imperfect: [],
};

perfectVerbs.set(укомплектовывать.name.text, укомплектовывать);

export { укомплектовывать };