import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задраить: PerfectVerb = {
  name: Word('задраить', 4),
  singular1stPerson: Word('задраю', 4),
  singular2ndPerson: Word('задраишь', 4),
  singular3rdPerson: Word('задраит', 4),
  plural1stPerson: Word('задраим', 4),
  plural2ndPerson: Word('задраите', 4),
  plural3rdPerson: Word('задраят', 4),
  masculinePast: Word('задраил', 4),
  femininePast: Word('задраила', 4),
  neuterPast: Word('задраило', 4),
  pluralPast: Word('задраили', 4),
  imperativeInformal: Word('задрай', 4),
  imperativeFormal: Word('задрайте', 4),
  imperfect: [],
};

perfectVerbs.set(задраить.name.text, задраить);

export { задраить };