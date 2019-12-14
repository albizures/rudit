import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекрестить: PerfectVerb = {
  name: Word('перекрестить', 9),
  singular1stPerson: Word('перекрещу', 8),
  singular2ndPerson: Word('перекрестишь', 6),
  singular3rdPerson: Word('перекрестит', 6),
  plural1stPerson: Word('перекрестим', 6),
  plural2ndPerson: Word('перекрестите', 6),
  plural3rdPerson: Word('перекрестят', 6),
  masculinePast: Word('перекрестил', 9),
  femininePast: Word('перекрестила', 9),
  neuterPast: Word('перекрестило', 9),
  pluralPast: Word('перекрестили', 9),
  imperativeInformal: Word('перекрести', 9),
  imperativeFormal: Word('перекрестите', 9),
  imperfect: [],
};

perfectVerbs.set(перекрестить.name.text, перекрестить);

export { перекрестить };