import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озвучить: PerfectVerb = {
  name: Word('озвучить', 3),
  singular1stPerson: Word('озвучу', 3),
  singular2ndPerson: Word('озвучишь', 3),
  singular3rdPerson: Word('озвучит', 3),
  plural1stPerson: Word('озвучим', 3),
  plural2ndPerson: Word('озвучите', 3),
  plural3rdPerson: Word('озвучат', 3),
  masculinePast: Word('озвучил', 3),
  femininePast: Word('озвучила', 3),
  neuterPast: Word('озвучило', 3),
  pluralPast: Word('озвучили', 3),
  imperativeInformal: Word('озвучь', 3),
  imperativeFormal: Word('озвучьте', 3),
  imperfect: [],
};

perfectVerbs.set(озвучить.name.text, озвучить);

export { озвучить };