import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припасти: PerfectVerb = {
  name: Word('припасти', 7),
  singular1stPerson: Word('припасу', 6),
  singular2ndPerson: Word('припасёшь', 4),
  singular3rdPerson: Word('припасёт', 4),
  plural1stPerson: Word('припасём', 4),
  plural2ndPerson: Word('припасёте', 4),
  plural3rdPerson: Word('припасут', 6),
  masculinePast: Word('припас', 4),
  femininePast: Word('припасла', 7),
  neuterPast: Word('припасло', 7),
  pluralPast: Word('припасли', 7),
  imperativeInformal: Word('припаси', 6),
  imperativeFormal: Word('припасите', 6),
  imperfect: [],
};

perfectVerbs.set(припасти.name.text, припасти);

export { припасти };