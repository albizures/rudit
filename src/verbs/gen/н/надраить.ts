import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надраить: PerfectVerb = {
  name: Word('надраить', 4),
  singular1stPerson: Word('надраю', 4),
  singular2ndPerson: Word('надраишь', 4),
  singular3rdPerson: Word('надраит', 4),
  plural1stPerson: Word('надраим', 4),
  plural2ndPerson: Word('надраите', 4),
  plural3rdPerson: Word('надраят', 4),
  masculinePast: Word('надраил', 4),
  femininePast: Word('надраила', 4),
  neuterPast: Word('надраило', 4),
  pluralPast: Word('надраили', 4),
  imperativeInformal: Word('надрай', 4),
  imperativeFormal: Word('надрайте', 4),
  imperfect: [],
};

perfectVerbs.set(надраить.name.text, надраить);

export { надраить };