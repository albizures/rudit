import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лить: PerfectVerb = {
  name: Word('лить', 1),
  singular1stPerson: Word('лью', 2),
  singular2ndPerson: Word('льёшь', 2),
  singular3rdPerson: Word('льёт', 2),
  plural1stPerson: Word('льём', 2),
  plural2ndPerson: Word('льёте', 2),
  plural3rdPerson: Word('льют', 2),
  masculinePast: Word('лил', 1),
  femininePast: Word('лила', 3),
  neuterPast: Word('лило', 1),
  pluralPast: Word('лили', 1),
  imperativeInformal: Word('лей', 1),
  imperativeFormal: Word('лейте', 1),
  imperfect: ['полить','налить'],
};

perfectVerbs.set(лить.name.text, лить);

export { лить };