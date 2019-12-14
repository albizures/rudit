import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const допить: PerfectVerb = {
  name: Word('допить', 3),
  singular1stPerson: Word('допью', 4),
  singular2ndPerson: Word('допьёшь', 1),
  singular3rdPerson: Word('допьёт', 1),
  plural1stPerson: Word('допьём', 1),
  plural2ndPerson: Word('допьёте', 6),
  plural3rdPerson: Word('допьют', 4),
  masculinePast: Word('допил//до'пил', 3),
  femininePast: Word('допила', 5),
  neuterPast: Word('допило//до'пило', 3),
  pluralPast: Word('допили//до'пили', 3),
  imperativeInformal: Word('допей', 3),
  imperativeFormal: Word('допейте', 3),
  imperfect: [],
};

perfectVerbs.set(допить.name.text, допить);

export { допить };