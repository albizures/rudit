import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const координироваться: PerfectVerb = {
  name: Word('координироваться', 7),
  singular1stPerson: Word('координируюсь', 7),
  singular2ndPerson: Word('координируешься', 7),
  singular3rdPerson: Word('координируется', 7),
  plural1stPerson: Word('координируемся', 7),
  plural2ndPerson: Word('координируетесь', 7),
  plural3rdPerson: Word('координируются', 7),
  masculinePast: Word('координировался', 7),
  femininePast: Word('координировалась', 7),
  neuterPast: Word('координировалось', 7),
  pluralPast: Word('координировались', 7),
  imperativeInformal: Word('координируйся', 7),
  imperativeFormal: Word('координируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(координироваться.name.text, координироваться);

export { координироваться };