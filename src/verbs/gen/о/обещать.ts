import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обещать: PerfectVerb = {
  name: Word('обещать', 4),
  singular1stPerson: Word('обещаю', 4),
  singular2ndPerson: Word('обещаешь', 4),
  singular3rdPerson: Word('обещает', 4),
  plural1stPerson: Word('обещаем', 4),
  plural2ndPerson: Word('обещаете', 4),
  plural3rdPerson: Word('обещают', 4),
  masculinePast: Word('обещал', 4),
  femininePast: Word('обещала', 4),
  neuterPast: Word('обещало', 4),
  pluralPast: Word('обещали', 4),
  imperativeInformal: Word('обещай', 4),
  imperativeFormal: Word('обещайте', 4),
  imperfect: ['пообещать'],
};

perfectVerbs.set(обещать.name.text, обещать);

export { обещать };