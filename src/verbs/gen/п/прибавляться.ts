import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прибавляться: PerfectVerb = {
  name: Word('прибавляться', 7),
  singular1stPerson: Word('прибавляюсь', 7),
  singular2ndPerson: Word('прибавляешься', 7),
  singular3rdPerson: Word('прибавляется', 7),
  plural1stPerson: Word('прибавляемся', 7),
  plural2ndPerson: Word('прибавляетесь', 7),
  plural3rdPerson: Word('прибавляются', 7),
  masculinePast: Word('прибавлялся', 7),
  femininePast: Word('прибавлялась', 7),
  neuterPast: Word('прибавлялось', 7),
  pluralPast: Word('прибавлялись', 7),
  imperativeInformal: Word('прибавляйся', 7),
  imperativeFormal: Word('прибавляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(прибавляться.name.text, прибавляться);

export { прибавляться };