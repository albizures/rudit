import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегрузить: PerfectVerb = {
  name: Word('перегрузить', 8),
  singular1stPerson: Word('перегружу', 8),
  singular2ndPerson: Word('перегрузишь', 6),
  singular3rdPerson: Word('перегрузит', 6),
  plural1stPerson: Word('перегрузим', 6),
  plural2ndPerson: Word('перегрузите', 6),
  plural3rdPerson: Word('перегрузят', 6),
  masculinePast: Word('перегрузил', 8),
  femininePast: Word('перегрузила', 8),
  neuterPast: Word('перегрузило', 8),
  pluralPast: Word('перегрузили', 8),
  imperativeInformal: Word('перегрузи', 8),
  imperativeFormal: Word('перегрузите', 8),
  imperfect: [],
};

perfectVerbs.set(перегрузить.name.text, перегрузить);

export { перегрузить };