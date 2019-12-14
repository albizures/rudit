import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навещать: PerfectVerb = {
  name: Word('навещать', 5),
  singular1stPerson: Word('навещаю', 5),
  singular2ndPerson: Word('навещаешь', 5),
  singular3rdPerson: Word('навещает', 5),
  plural1stPerson: Word('навещаем', 5),
  plural2ndPerson: Word('навещаете', 5),
  plural3rdPerson: Word('навещают', 5),
  masculinePast: Word('навещал', 5),
  femininePast: Word('навещала', 5),
  neuterPast: Word('навещало', 5),
  pluralPast: Word('навещали', 5),
  imperativeInformal: Word('навещай', 5),
  imperativeFormal: Word('навещайте', 5),
  imperfect: [],
};

perfectVerbs.set(навещать.name.text, навещать);

export { навещать };