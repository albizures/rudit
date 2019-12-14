import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const одушевить: PerfectVerb = {
  name: Word('одушевить', 6),
  singular1stPerson: Word('одушевлю', 7),
  singular2ndPerson: Word('одушевишь', 6),
  singular3rdPerson: Word('одушевит', 6),
  plural1stPerson: Word('одушевим', 6),
  plural2ndPerson: Word('одушевите', 6),
  plural3rdPerson: Word('одушевят', 6),
  masculinePast: Word('одушевил', 6),
  femininePast: Word('одушевила', 6),
  neuterPast: Word('одушевило', 6),
  pluralPast: Word('одушевили', 6),
  imperativeInformal: Word('одушеви', 6),
  imperativeFormal: Word('одушевите', 6),
  imperfect: [],
};

perfectVerbs.set(одушевить.name.text, одушевить);

export { одушевить };