import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сориентироваться: PerfectVerb = {
  name: Word('сориентироваться', 7),
  singular1stPerson: Word('сориентируюсь', 7),
  singular2ndPerson: Word('сориентируешься', 7),
  singular3rdPerson: Word('сориентируется', 7),
  plural1stPerson: Word('сориентируемся', 7),
  plural2ndPerson: Word('сориентируетесь', 7),
  plural3rdPerson: Word('сориентируются', 7),
  masculinePast: Word('сориентировался', 7),
  femininePast: Word('сориентировалась', 7),
  neuterPast: Word('сориентировалось', 7),
  pluralPast: Word('сориентировались', 7),
  imperativeInformal: Word('сориентируйся', 7),
  imperativeFormal: Word('сориентируйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(сориентироваться.name.text, сориентироваться);

export { сориентироваться };