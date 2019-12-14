import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const костить: PerfectVerb = {
  name: Word('костить', 4),
  singular1stPerson: Word('кощу', 3),
  singular2ndPerson: Word('костишь', 4),
  singular3rdPerson: Word('костит', 4),
  plural1stPerson: Word('костим', 4),
  plural2ndPerson: Word('костите', 4),
  plural3rdPerson: Word('костят', 4),
  masculinePast: Word('костил', 4),
  femininePast: Word('костила', 4),
  neuterPast: Word('костило', 4),
  pluralPast: Word('костили', 4),
  imperativeInformal: Word('кости', 4),
  imperativeFormal: Word('костите', 4),
  imperfect: ['раскостить'],
};

perfectVerbs.set(костить.name.text, костить);

export { костить };