import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отшить: PerfectVerb = {
  name: Word('отшить', 3),
  singular1stPerson: Word('отошью', 5),
  singular2ndPerson: Word('отошьёшь', 0),
  singular3rdPerson: Word('отошьёт', 0),
  plural1stPerson: Word('отошьём', 0),
  plural2ndPerson: Word('отошьёте', 7),
  plural3rdPerson: Word('отошьют', 5),
  masculinePast: Word('отшил', 3),
  femininePast: Word('отшила', 3),
  neuterPast: Word('отшило', 3),
  pluralPast: Word('отшили', 3),
  imperativeInformal: Word('отшей', 3),
  imperativeFormal: Word('отшейте', 3),
  imperfect: [],
};

perfectVerbs.set(отшить.name.text, отшить);

export { отшить };