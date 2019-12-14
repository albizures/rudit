import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгнить: PerfectVerb = {
  name: Word('сгнить', 3),
  singular1stPerson: Word('сгнию', 4),
  singular2ndPerson: Word('сгниёшь', 3),
  singular3rdPerson: Word('сгниёт', 3),
  plural1stPerson: Word('сгниём', 3),
  plural2ndPerson: Word('сгниёте', 6),
  plural3rdPerson: Word('сгниют', 4),
  masculinePast: Word('сгнил', 3),
  femininePast: Word('сгнила', 5),
  neuterPast: Word('сгнило', 3),
  pluralPast: Word('сгнили', 3),
  imperativeInformal: Word('сгний', 3),
  imperativeFormal: Word('сгнийте', 6),
  imperfect: [],
};

perfectVerbs.set(сгнить.name.text, сгнить);

export { сгнить };