import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воодушевить: PerfectVerb = {
  name: Word('воодушевить', 8),
  singular1stPerson: Word('воодушевлю', 9),
  singular2ndPerson: Word('воодушевишь', 8),
  singular3rdPerson: Word('воодушевит', 8),
  plural1stPerson: Word('воодушевим', 8),
  plural2ndPerson: Word('воодушевите', 8),
  plural3rdPerson: Word('воодушевят', 8),
  masculinePast: Word('воодушевил', 8),
  femininePast: Word('воодушевила', 8),
  neuterPast: Word('воодушевило', 8),
  pluralPast: Word('воодушевили', 8),
  imperativeInformal: Word('воодушеви', 8),
  imperativeFormal: Word('воодушевите', 8),
  imperfect: [],
};

perfectVerbs.set(воодушевить.name.text, воодушевить);

export { воодушевить };