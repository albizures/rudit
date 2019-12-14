import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ориентироваться: PerfectVerb = {
  name: Word('ориентироваться', 6),
  singular1stPerson: Word('ориентируюсь', 6),
  singular2ndPerson: Word('ориентируешься', 6),
  singular3rdPerson: Word('ориентируется', 6),
  plural1stPerson: Word('ориентируемся', 6),
  plural2ndPerson: Word('ориентируетесь', 6),
  plural3rdPerson: Word('ориентируются', 6),
  masculinePast: Word('ориентировался', 6),
  femininePast: Word('ориентировалась', 6),
  neuterPast: Word('ориентировалось', 6),
  pluralPast: Word('ориентировались', 6),
  imperativeInformal: Word('ориентируйся', 6),
  imperativeFormal: Word('ориентируйтесь', 6),
  imperfect: ['сориентироваться'],
};

perfectVerbs.set(ориентироваться.name.text, ориентироваться);

export { ориентироваться };