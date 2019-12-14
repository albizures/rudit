import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const паясничать: PerfectVerb = {
  name: Word('паясничать', 2),
  singular1stPerson: Word('паясничаю', 2),
  singular2ndPerson: Word('паясничаешь', 2),
  singular3rdPerson: Word('паясничает', 2),
  plural1stPerson: Word('паясничаем', 2),
  plural2ndPerson: Word('паясничаете', 2),
  plural3rdPerson: Word('паясничают', 2),
  masculinePast: Word('паясничал', 2),
  femininePast: Word('паясничала', 2),
  neuterPast: Word('паясничало', 2),
  pluralPast: Word('паясничали', 2),
  imperativeInformal: Word('паясничай', 2),
  imperativeFormal: Word('паясничайте', 2),
  imperfect: [],
};

perfectVerbs.set(паясничать.name.text, паясничать);

export { паясничать };