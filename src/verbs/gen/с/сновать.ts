import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сновать: PerfectVerb = {
  name: Word('сновать', 4),
  singular1stPerson: Word('сную', 3),
  singular2ndPerson: Word('снуёшь', 3),
  singular3rdPerson: Word('снуёт', 3),
  plural1stPerson: Word('снуём', 3),
  plural2ndPerson: Word('снуёте', 3),
  plural3rdPerson: Word('снуют', 3),
  masculinePast: Word('сновал', 4),
  femininePast: Word('сновала', 4),
  neuterPast: Word('сновало', 4),
  pluralPast: Word('сновали', 4),
  imperativeInformal: Word('снуй', 2),
  imperativeFormal: Word('снуйте', 2),
  imperfect: [],
};

perfectVerbs.set(сновать.name.text, сновать);

export { сновать };