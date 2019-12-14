import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запить: PerfectVerb = {
  name: Word('запить', 3),
  singular1stPerson: Word('запью', 4),
  singular2ndPerson: Word('запьёшь', 4),
  singular3rdPerson: Word('запьёт', 4),
  plural1stPerson: Word('запьём', 4),
  plural2ndPerson: Word('запьёте', 4),
  plural3rdPerson: Word('запьют', 4),
  masculinePast: Word('запил', 3),
  femininePast: Word('запила', 5),
  neuterPast: Word('запило', 3),
  pluralPast: Word('запили', 3),
  imperativeInformal: Word('запей', 3),
  imperativeFormal: Word('запейте', 3),
  imperfect: [],
};

perfectVerbs.set(запить.name.text, запить);

export { запить };