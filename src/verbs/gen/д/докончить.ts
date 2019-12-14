import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докончить: PerfectVerb = {
  name: Word('докончить', 3),
  singular1stPerson: Word('докончу', 3),
  singular2ndPerson: Word('докончишь', 3),
  singular3rdPerson: Word('докончит', 3),
  plural1stPerson: Word('докончим', 3),
  plural2ndPerson: Word('докончите', 3),
  plural3rdPerson: Word('докончат', 3),
  masculinePast: Word('докончил', 3),
  femininePast: Word('докончила', 3),
  neuterPast: Word('докончило', 3),
  pluralPast: Word('докончили', 3),
  imperativeInformal: Word('докончи', 3),
  imperativeFormal: Word('докончите', 3),
  imperfect: [],
};

perfectVerbs.set(докончить.name.text, докончить);

export { докончить };