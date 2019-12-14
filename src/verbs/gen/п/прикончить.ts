import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикончить: PerfectVerb = {
  name: Word('прикончить', 4),
  singular1stPerson: Word('прикончу', 4),
  singular2ndPerson: Word('прикончишь', 4),
  singular3rdPerson: Word('прикончит', 4),
  plural1stPerson: Word('прикончим', 4),
  plural2ndPerson: Word('прикончите', 4),
  plural3rdPerson: Word('прикончат', 4),
  masculinePast: Word('прикончил', 4),
  femininePast: Word('прикончила', 4),
  neuterPast: Word('прикончило', 4),
  pluralPast: Word('прикончили', 4),
  imperativeInformal: Word('прикончи', 4),
  imperativeFormal: Word('прикончите', 4),
  imperfect: [],
};

perfectVerbs.set(прикончить.name.text, прикончить);

export { прикончить };