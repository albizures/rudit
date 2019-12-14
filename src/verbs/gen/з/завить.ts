import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завить: PerfectVerb = {
  name: Word('завить', 3),
  singular1stPerson: Word('завью', 4),
  singular2ndPerson: Word('завьёшь', 1),
  singular3rdPerson: Word('завьёт', 1),
  plural1stPerson: Word('завьём', 1),
  plural2ndPerson: Word('завьёте', 1),
  plural3rdPerson: Word('завьют', 4),
  masculinePast: Word('завил', 3),
  femininePast: Word('завила', 5),
  neuterPast: Word('завило', 3),
  pluralPast: Word('завили', 3),
  imperativeInformal: Word('завей', 3),
  imperativeFormal: Word('завейте', 3),
  imperfect: [],
};

perfectVerbs.set(завить.name.text, завить);

export { завить };