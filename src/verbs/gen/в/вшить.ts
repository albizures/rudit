import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вшить: PerfectVerb = {
  name: Word('вшить', 2),
  singular1stPerson: Word('вошью', 4),
  singular2ndPerson: Word('вошьёшь', 1),
  singular3rdPerson: Word('вошьёт', 1),
  plural1stPerson: Word('вошьём', 1),
  plural2ndPerson: Word('вошьёте', 6),
  plural3rdPerson: Word('вошьют', 4),
  masculinePast: Word('вшил', 2),
  femininePast: Word('вшила', 2),
  neuterPast: Word('вшило', 2),
  pluralPast: Word('вшили', 2),
  imperativeInformal: Word('вшей', 2),
  imperativeFormal: Word('вшейте', 2),
  imperfect: [],
};

perfectVerbs.set(вшить.name.text, вшить);

export { вшить };