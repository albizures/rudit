import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const творить: PerfectVerb = {
  name: Word('творить', 4),
  singular1stPerson: Word('творю', 4),
  singular2ndPerson: Word('творишь', 4),
  singular3rdPerson: Word('творит', 4),
  plural1stPerson: Word('творим', 4),
  plural2ndPerson: Word('творите', 4),
  plural3rdPerson: Word('творят', 4),
  masculinePast: Word('творил', 4),
  femininePast: Word('творила', 4),
  neuterPast: Word('творило', 4),
  pluralPast: Word('творили', 4),
  imperativeInformal: Word('твори', 4),
  imperativeFormal: Word('творите', 4),
  imperfect: [],
};

perfectVerbs.set(творить.name.text, творить);

export { творить };