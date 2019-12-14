import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изнуряться: PerfectVerb = {
  name: Word('изнуряться', 5),
  singular1stPerson: Word('изнуряюсь', 5),
  singular2ndPerson: Word('изнуряешься', 5),
  singular3rdPerson: Word('изнуряется', 5),
  plural1stPerson: Word('изнуряемся', 5),
  plural2ndPerson: Word('изнуряетесь', 5),
  plural3rdPerson: Word('изнуряются', 5),
  masculinePast: Word('изнурялся', 5),
  femininePast: Word('изнурялась', 5),
  neuterPast: Word('изнурялось', 5),
  pluralPast: Word('изнурялись', 5),
  imperativeInformal: Word('изнуряйся', 5),
  imperativeFormal: Word('изнуряйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изнуряться.name.text, изнуряться);

export { изнуряться };