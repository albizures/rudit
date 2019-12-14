import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проорать: PerfectVerb = {
  name: Word('проорать', 5),
  singular1stPerson: Word('проору', 5),
  singular2ndPerson: Word('проорёшь', 5),
  singular3rdPerson: Word('проорёт', 5),
  plural1stPerson: Word('проорём', 5),
  plural2ndPerson: Word('проорёте', 5),
  plural3rdPerson: Word('проорут', 5),
  masculinePast: Word('проорал', 5),
  femininePast: Word('проорала', 5),
  neuterPast: Word('проорало', 5),
  pluralPast: Word('проорали', 5),
  imperativeInformal: Word('проори', 5),
  imperativeFormal: Word('проорите', 5),
  imperfect: [],
};

perfectVerbs.set(проорать.name.text, проорать);

export { проорать };