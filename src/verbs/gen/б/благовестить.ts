import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const благовестить: PerfectVerb = {
  name: Word('благовестить', 2),
  singular1stPerson: Word('благовещу', 2),
  singular2ndPerson: Word('благовестишь', 2),
  singular3rdPerson: Word('благовестит', 2),
  plural1stPerson: Word('благовестим', 2),
  plural2ndPerson: Word('благовестите', 2),
  plural3rdPerson: Word('благовестят', 2),
  masculinePast: Word('благовестил', 2),
  femininePast: Word('благовестила', 2),
  neuterPast: Word('благовестило', 2),
  pluralPast: Word('благовестили', 2),
  imperativeInformal: Word('благовести', 2),
  imperativeFormal: Word('благовестите', 2),
  imperfect: [],
};

perfectVerbs.set(благовестить.name.text, благовестить);

export { благовестить };