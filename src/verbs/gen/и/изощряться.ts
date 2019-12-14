import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изощряться: PerfectVerb = {
  name: Word('изощряться', 5),
  singular1stPerson: Word('изощряюсь', 5),
  singular2ndPerson: Word('изощряешься', 5),
  singular3rdPerson: Word('изощряется', 5),
  plural1stPerson: Word('изощряемся', 5),
  plural2ndPerson: Word('изощряетесь', 5),
  plural3rdPerson: Word('изощряются', 5),
  masculinePast: Word('изощрялся', 5),
  femininePast: Word('изощрялась', 5),
  neuterPast: Word('изощрялось', 5),
  pluralPast: Word('изощрялись', 5),
  imperativeInformal: Word('изощряйся', 5),
  imperativeFormal: Word('изощряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изощряться.name.text, изощряться);

export { изощряться };