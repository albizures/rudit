import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгнить: PerfectVerb = {
  name: Word('подгнить', 5),
  singular1stPerson: Word('подгнию', 6),
  singular2ndPerson: Word('подгниёшь', 5),
  singular3rdPerson: Word('подгниёт', 5),
  plural1stPerson: Word('подгниём', 5),
  plural2ndPerson: Word('подгниёте', 8),
  plural3rdPerson: Word('подгниют', 6),
  masculinePast: Word('подгнил', 5),
  femininePast: Word('подгнила', 7),
  neuterPast: Word('подгнило', 5),
  pluralPast: Word('подгнили', 5),
  imperativeInformal: Word('подгний', 1),
  imperativeFormal: Word('подгнийте', 1),
  imperfect: [],
};

perfectVerbs.set(подгнить.name.text, подгнить);

export { подгнить };