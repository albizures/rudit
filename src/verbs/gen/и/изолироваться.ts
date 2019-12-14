import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изолироваться: PerfectVerb = {
  name: Word('изолироваться', 4),
  singular1stPerson: Word('изолируюсь', 4),
  singular2ndPerson: Word('изолируешься', 4),
  singular3rdPerson: Word('изолируется', 4),
  plural1stPerson: Word('изолируемся', 4),
  plural2ndPerson: Word('изолируетесь', 4),
  plural3rdPerson: Word('изолируются', 4),
  masculinePast: Word('изолировался', 4),
  femininePast: Word('изолировалась', 4),
  neuterPast: Word('изолировалось', 4),
  pluralPast: Word('изолировались', 4),
  imperativeInformal: Word('изолируйся', 4),
  imperativeFormal: Word('изолируйтесь', 4),
  imperfect: [],
};

perfectVerbs.set(изолироваться.name.text, изолироваться);

export { изолироваться };