import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ободряться: PerfectVerb = {
  name: Word('ободряться', 5),
  singular1stPerson: Word('ободряюсь', 5),
  singular2ndPerson: Word('ободряешься', 5),
  singular3rdPerson: Word('ободряется', 5),
  plural1stPerson: Word('ободряемся', 5),
  plural2ndPerson: Word('ободряетесь', 5),
  plural3rdPerson: Word('ободряются', 5),
  masculinePast: Word('ободрялся', 5),
  femininePast: Word('ободрялась', 5),
  neuterPast: Word('ободрялось', 5),
  pluralPast: Word('ободрялись', 5),
  imperativeInformal: Word('ободряйся', 5),
  imperativeFormal: Word('ободряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ободряться.name.text, ободряться);

export { ободряться };