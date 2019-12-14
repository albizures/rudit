import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилить: PerfectVerb = {
  name: Word('прилить', 4),
  singular1stPerson: Word('прилью', 5),
  singular2ndPerson: Word('прильёшь', 2),
  singular3rdPerson: Word('прильёт', 2),
  plural1stPerson: Word('прильём', 2),
  plural2ndPerson: Word('прильёте', 7),
  plural3rdPerson: Word('прильют', 5),
  masculinePast: Word('прилил', 4),
  femininePast: Word('прилила', 6),
  neuterPast: Word('прилило', 4),
  pluralPast: Word('прилили', 4),
  imperativeInformal: Word('прилей', 4),
  imperativeFormal: Word('прилейте', 4),
  imperfect: [],
};

perfectVerbs.set(прилить.name.text, прилить);

export { прилить };