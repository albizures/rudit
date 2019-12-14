import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const добить: PerfectVerb = {
  name: Word('добить', 3),
  singular1stPerson: Word('добью', 4),
  singular2ndPerson: Word('добьёшь', 4),
  singular3rdPerson: Word('добьёт', 4),
  plural1stPerson: Word('добьём', 4),
  plural2ndPerson: Word('добьёте', 4),
  plural3rdPerson: Word('добьют', 4),
  masculinePast: Word('добил', 3),
  femininePast: Word('добила', 3),
  neuterPast: Word('добило', 3),
  pluralPast: Word('добили', 3),
  imperativeInformal: Word('добей', 3),
  imperativeFormal: Word('добейте', 3),
  imperfect: [],
};

perfectVerbs.set(добить.name.text, добить);

export { добить };