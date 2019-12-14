import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогуляться: PerfectVerb = {
  name: Word('прогуляться', 6),
  singular1stPerson: Word('прогуляюсь', 6),
  singular2ndPerson: Word('прогуляешься', 6),
  singular3rdPerson: Word('прогуляется', 6),
  plural1stPerson: Word('прогуляемся', 6),
  plural2ndPerson: Word('прогуляетесь', 6),
  plural3rdPerson: Word('прогуляются', 6),
  masculinePast: Word('прогулялся', 6),
  femininePast: Word('прогулялась', 6),
  neuterPast: Word('прогулялось', 6),
  pluralPast: Word('прогулялись', 6),
  imperativeInformal: Word('прогуляйся', 6),
  imperativeFormal: Word('прогуляйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(прогуляться.name.text, прогуляться);

export { прогуляться };