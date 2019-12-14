import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откашляться: PerfectVerb = {
  name: Word('откашляться', 3),
  singular1stPerson: Word('откашляюсь', 3),
  singular2ndPerson: Word('откашляешься', 3),
  singular3rdPerson: Word('откашляется', 3),
  plural1stPerson: Word('откашляемся', 3),
  plural2ndPerson: Word('откашляетесь', 3),
  plural3rdPerson: Word('откашляются', 3),
  masculinePast: Word('откашлялся', 3),
  femininePast: Word('откашлялась', 3),
  neuterPast: Word('откашлялось', 3),
  pluralPast: Word('откашлялись', 3),
  imperativeInformal: Word('откашляйся', 3),
  imperativeFormal: Word('откашляйтесь', 3),
  imperfect: [],
};

perfectVerbs.set(откашляться.name.text, откашляться);

export { откашляться };