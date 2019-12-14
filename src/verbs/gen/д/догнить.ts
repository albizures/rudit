import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догнить: PerfectVerb = {
  name: Word('догнить', 4),
  singular1stPerson: Word('догнию', 5),
  singular2ndPerson: Word('догниёшь', 5),
  singular3rdPerson: Word('догниёт', 5),
  plural1stPerson: Word('догниём', 5),
  plural2ndPerson: Word('догниёте', 5),
  plural3rdPerson: Word('догниют', 5),
  masculinePast: Word('догнил', 4),
  femininePast: Word('догнила', 6),
  neuterPast: Word('догнило', 4),
  pluralPast: Word('догнили', 4),
  imperativeInformal: Word('догний', 1),
  imperativeFormal: Word('догнийте', 1),
  imperfect: [],
};

perfectVerbs.set(догнить.name.text, догнить);

export { догнить };