import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замещать: PerfectVerb = {
  name: Word('замещать', 5),
  singular1stPerson: Word('замещаю', 5),
  singular2ndPerson: Word('замещаешь', 5),
  singular3rdPerson: Word('замещает', 5),
  plural1stPerson: Word('замещаем', 5),
  plural2ndPerson: Word('замещаете', 5),
  plural3rdPerson: Word('замещают', 5),
  masculinePast: Word('замещал', 5),
  femininePast: Word('замещала', 5),
  neuterPast: Word('замещало', 5),
  pluralPast: Word('замещали', 5),
  imperativeInformal: Word('замещай', 5),
  imperativeFormal: Word('замещайте', 5),
  imperfect: [],
};

perfectVerbs.set(замещать.name.text, замещать);

export { замещать };