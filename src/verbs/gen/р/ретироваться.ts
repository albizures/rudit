import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ретироваться: PerfectVerb = {
  name: Word('ретироваться', 7),
  singular1stPerson: Word('ретируюсь', 5),
  singular2ndPerson: Word('ретируешься', 5),
  singular3rdPerson: Word('ретируется', 5),
  plural1stPerson: Word('ретируемся', 5),
  plural2ndPerson: Word('ретируетесь', 5),
  plural3rdPerson: Word('ретируются', 5),
  masculinePast: Word('ретировался', 7),
  femininePast: Word('ретировалась', 7),
  neuterPast: Word('ретировалось', 7),
  pluralPast: Word('ретировались', 7),
  imperativeInformal: Word('ретируйся', 5),
  imperativeFormal: Word('ретируйтесь', 5),
  imperfect: [],
};

perfectVerbs.set(ретироваться.name.text, ретироваться);

export { ретироваться };