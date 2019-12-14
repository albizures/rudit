import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воодушевляться: PerfectVerb = {
  name: Word('воодушевляться', 9),
  singular1stPerson: Word('воодушевляюсь', 9),
  singular2ndPerson: Word('воодушевляешься', 9),
  singular3rdPerson: Word('воодушевляется', 9),
  plural1stPerson: Word('воодушевляемся', 9),
  plural2ndPerson: Word('воодушевляетесь', 9),
  plural3rdPerson: Word('воодушевляются', 9),
  masculinePast: Word('воодушевлялся', 9),
  femininePast: Word('воодушевлялась', 9),
  neuterPast: Word('воодушевлялось', 9),
  pluralPast: Word('воодушевлялись', 9),
  imperativeInformal: Word('воодушевляйся', 9),
  imperativeFormal: Word('воодушевляйтесь', 9),
  imperfect: [],
};

perfectVerbs.set(воодушевляться.name.text, воодушевляться);

export { воодушевляться };