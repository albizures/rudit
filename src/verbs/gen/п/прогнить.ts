import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогнить: PerfectVerb = {
  name: Word('прогнить', 5),
  singular1stPerson: Word('прогнию', 6),
  singular2ndPerson: Word('прогниёшь', 5),
  singular3rdPerson: Word('прогниёт', 5),
  plural1stPerson: Word('прогниём', 5),
  plural2ndPerson: Word('прогниёте', 8),
  plural3rdPerson: Word('прогниют', 6),
  masculinePast: Word('прогнил', 5),
  femininePast: Word('прогнила', 7),
  neuterPast: Word('прогнило', 5),
  pluralPast: Word('прогнили', 5),
  imperativeInformal: Word('прогний', 2),
  imperativeFormal: Word('прогнийте', 2),
  imperfect: [],
};

perfectVerbs.set(прогнить.name.text, прогнить);

export { прогнить };