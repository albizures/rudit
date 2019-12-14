import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const татуироваться: PerfectVerb = {
  name: Word('татуироваться', 8),
  singular1stPerson: Word('татуируюсь', 6),
  singular2ndPerson: Word('татуируешься', 6),
  singular3rdPerson: Word('татуируется', 6),
  plural1stPerson: Word('татуируемся', 6),
  plural2ndPerson: Word('татуируетесь', 6),
  plural3rdPerson: Word('татуируются', 6),
  masculinePast: Word('татуировался', 8),
  femininePast: Word('татуировалась', 8),
  neuterPast: Word('татуировалось', 8),
  pluralPast: Word('татуировались', 8),
  imperativeInformal: Word('татуируйся', 6),
  imperativeFormal: Word('татуируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(татуироваться.name.text, татуироваться);

export { татуироваться };