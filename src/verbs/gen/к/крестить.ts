import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const крестить: PerfectVerb = {
  name: Word('крестить', 5),
  singular1stPerson: Word('крещу', 4),
  singular2ndPerson: Word('крестишь', 2),
  singular3rdPerson: Word('крестит', 2),
  plural1stPerson: Word('крестим', 2),
  plural2ndPerson: Word('крестите', 2),
  plural3rdPerson: Word('крестят', 2),
  masculinePast: Word('крестил', 5),
  femininePast: Word('крестила', 5),
  neuterPast: Word('крестило', 5),
  pluralPast: Word('крестили', 5),
  imperativeInformal: Word('крести', 5),
  imperativeFormal: Word('крестите', 5),
  imperfect: ['окрестить','перекрестить'],
};

perfectVerbs.set(крестить.name.text, крестить);

export { крестить };