import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обшарпать: PerfectVerb = {
  name: Word('обшарпать', 3),
  singular1stPerson: Word('обшарпаю', 3),
  singular2ndPerson: Word('обшарпаешь', 3),
  singular3rdPerson: Word('обшарпает', 3),
  plural1stPerson: Word('обшарпаем', 3),
  plural2ndPerson: Word('обшарпаете', 3),
  plural3rdPerson: Word('обшарпают', 3),
  masculinePast: Word('обшарпал', 3),
  femininePast: Word('обшарпала', 3),
  neuterPast: Word('обшарпало', 3),
  pluralPast: Word('обшарпали', 3),
  imperativeInformal: Word('обшарпай', 3),
  imperativeFormal: Word('обшарпайте', 3),
  imperfect: [],
};

perfectVerbs.set(обшарпать.name.text, обшарпать);

export { обшарпать };