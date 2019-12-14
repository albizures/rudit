import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const манить: PerfectVerb = {
  name: Word('манить', 3),
  singular1stPerson: Word('маню', 3),
  singular2ndPerson: Word('манишь', 1),
  singular3rdPerson: Word('манит', 1),
  plural1stPerson: Word('маним', 1),
  plural2ndPerson: Word('маните', 1),
  plural3rdPerson: Word('манят', 1),
  masculinePast: Word('манил', 3),
  femininePast: Word('манила', 3),
  neuterPast: Word('манило', 3),
  pluralPast: Word('манили', 3),
  imperativeInformal: Word('мани', 3),
  imperativeFormal: Word('маните', 3),
  imperfect: [],
};

perfectVerbs.set(манить.name.text, манить);

export { манить };