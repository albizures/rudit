import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удить: PerfectVerb = {
  name: Word('удить', 2),
  singular1stPerson: Word('ужу', 2),
  singular2ndPerson: Word('удишь', 0),
  singular3rdPerson: Word('удит', 0),
  plural1stPerson: Word('удим', 0),
  plural2ndPerson: Word('удите', 0),
  plural3rdPerson: Word('удят', 0),
  masculinePast: Word('удил', 2),
  femininePast: Word('удила', 2),
  neuterPast: Word('удило', 2),
  pluralPast: Word('удили', 2),
  imperativeInformal: Word('уди', 2),
  imperativeFormal: Word('удите', 2),
  imperfect: [],
};

perfectVerbs.set(удить.name.text, удить);

export { удить };