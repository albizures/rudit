import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прошить: PerfectVerb = {
  name: Word('прошить', 4),
  singular1stPerson: Word('прошью', 5),
  singular2ndPerson: Word('прошьёшь', 2),
  singular3rdPerson: Word('прошьёт', 2),
  plural1stPerson: Word('прошьём', 2),
  plural2ndPerson: Word('прошьёте', 7),
  plural3rdPerson: Word('прошьют', 5),
  masculinePast: Word('прошил', 4),
  femininePast: Word('прошила', 4),
  neuterPast: Word('прошило', 4),
  pluralPast: Word('прошили', 4),
  imperativeInformal: Word('прошей', 4),
  imperativeFormal: Word('прошейте', 4),
  imperfect: [],
};

perfectVerbs.set(прошить.name.text, прошить);

export { прошить };