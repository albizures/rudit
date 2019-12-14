import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исцеляться: PerfectVerb = {
  name: Word('исцеляться', 5),
  singular1stPerson: Word('исцеляюсь', 5),
  singular2ndPerson: Word('исцеляешься', 5),
  singular3rdPerson: Word('исцеляется', 5),
  plural1stPerson: Word('исцеляемся', 5),
  plural2ndPerson: Word('исцеляетесь', 5),
  plural3rdPerson: Word('исцеляются', 5),
  masculinePast: Word('исцелялся', 5),
  femininePast: Word('исцелялась', 5),
  neuterPast: Word('исцелялось', 5),
  pluralPast: Word('исцелялись', 5),
  imperativeInformal: Word('исцеляйся', 5),
  imperativeFormal: Word('исцеляйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(исцеляться.name.text, исцеляться);

export { исцеляться };