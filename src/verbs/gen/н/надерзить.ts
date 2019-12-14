import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надерзить: PerfectVerb = {
  name: Word('надерзить', 6),
  singular1stPerson: Word('надержу', 6),
  singular2ndPerson: Word('надерзишь', 6),
  singular3rdPerson: Word('надерзит', 6),
  plural1stPerson: Word('надерзим', 6),
  plural2ndPerson: Word('надерзите', 6),
  plural3rdPerson: Word('надерзят', 6),
  masculinePast: Word('надерзил', 6),
  femininePast: Word('надерзила', 6),
  neuterPast: Word('надерзило', 6),
  pluralPast: Word('надерзили', 6),
  imperativeInformal: Word('надерзи', 6),
  imperativeFormal: Word('надерзите', 6),
  imperfect: [],
};

perfectVerbs.set(надерзить.name.text, надерзить);

export { надерзить };