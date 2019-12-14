import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искривляться: PerfectVerb = {
  name: Word('искривляться', 7),
  singular1stPerson: Word('искривляюсь', 7),
  singular2ndPerson: Word('искривляешься', 7),
  singular3rdPerson: Word('искривляется', 7),
  plural1stPerson: Word('искривляемся', 7),
  plural2ndPerson: Word('искривляетесь', 7),
  plural3rdPerson: Word('искривляются', 7),
  masculinePast: Word('искривлялся', 7),
  femininePast: Word('искривлялась', 7),
  neuterPast: Word('искривлялось', 7),
  pluralPast: Word('искривлялись', 7),
  imperativeInformal: Word('искривляйся', 7),
  imperativeFormal: Word('искривляйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(искривляться.name.text, искривляться);

export { искривляться };