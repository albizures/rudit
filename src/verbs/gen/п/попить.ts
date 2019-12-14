import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попить: PerfectVerb = {
  name: Word('попить', 3),
  singular1stPerson: Word('попью', 4),
  singular2ndPerson: Word('попьёшь', 1),
  singular3rdPerson: Word('попьёт', 1),
  plural1stPerson: Word('попьём', 1),
  plural2ndPerson: Word('попьёте', 6),
  plural3rdPerson: Word('попьют', 4),
  masculinePast: Word('попил', 3),
  femininePast: Word('попила', 5),
  neuterPast: Word('попило', 3),
  pluralPast: Word('попили', 3),
  imperativeInformal: Word('попей', 3),
  imperativeFormal: Word('попейте', 3),
  imperfect: [],
};

perfectVerbs.set(попить.name.text, попить);

export { попить };