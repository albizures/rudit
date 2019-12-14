import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осуществляться: PerfectVerb = {
  name: Word('осуществляться', 9),
  singular1stPerson: Word('осуществляюсь', 9),
  singular2ndPerson: Word('осуществляешься', 9),
  singular3rdPerson: Word('осуществляется', 9),
  plural1stPerson: Word('осуществляемся', 9),
  plural2ndPerson: Word('осуществляетесь', 9),
  plural3rdPerson: Word('осуществляются', 9),
  masculinePast: Word('осуществлялся', 9),
  femininePast: Word('осуществлялась', 9),
  neuterPast: Word('осуществлялось', 9),
  pluralPast: Word('осуществлялись', 9),
  imperativeInformal: Word('осуществляйся', 9),
  imperativeFormal: Word('осуществляйтесь', 9),
  imperfect: ['осуществиться'],
};

perfectVerbs.set(осуществляться.name.text, осуществляться);

export { осуществляться };