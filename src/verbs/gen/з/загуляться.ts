import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загуляться: PerfectVerb = {
  name: Word('загуляться', 5),
  singular1stPerson: Word('загуляюсь', 5),
  singular2ndPerson: Word('загуляешься', 5),
  singular3rdPerson: Word('загуляется', 5),
  plural1stPerson: Word('загуляемся', 5),
  plural2ndPerson: Word('загуляетесь', 5),
  plural3rdPerson: Word('загуляются', 5),
  masculinePast: Word('загулялся', 5),
  femininePast: Word('загулялась', 5),
  neuterPast: Word('загулялось', 5),
  pluralPast: Word('загулялись', 5),
  imperativeInformal: Word('загуляйся', 5),
  imperativeFormal: Word('загуляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(загуляться.name.text, загуляться);

export { загуляться };