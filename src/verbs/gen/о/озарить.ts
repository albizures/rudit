import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озарить: PerfectVerb = {
  name: Word('озарить', 4),
  singular1stPerson: Word('озарю', 4),
  singular2ndPerson: Word('озаришь', 4),
  singular3rdPerson: Word('озарит', 4),
  plural1stPerson: Word('озарим', 4),
  plural2ndPerson: Word('озарите', 4),
  plural3rdPerson: Word('озарят', 4),
  masculinePast: Word('озарил', 4),
  femininePast: Word('озарила', 4),
  neuterPast: Word('озарило', 4),
  pluralPast: Word('озарили', 4),
  imperativeInformal: Word('озари', 4),
  imperativeFormal: Word('озарите', 4),
  imperfect: ['озарять'],
};

perfectVerbs.set(озарить.name.text, озарить);

export { озарить };