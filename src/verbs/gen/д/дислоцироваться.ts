import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дислоцироваться: PerfectVerb = {
  name: Word('дислоцироваться', 6),
  singular1stPerson: Word('дислоцируюсь', 6),
  singular2ndPerson: Word('дислоцируешься', 6),
  singular3rdPerson: Word('дислоцируется', 6),
  plural1stPerson: Word('дислоцируемся', 6),
  plural2ndPerson: Word('дислоцируетесь', 6),
  plural3rdPerson: Word('дислоцируются', 6),
  masculinePast: Word('дислоцировался', 6),
  femininePast: Word('дислоцировалась', 6),
  neuterPast: Word('дислоцировалось', 6),
  pluralPast: Word('дислоцировались', 6),
  imperativeInformal: Word('дислоцируйся', 6),
  imperativeFormal: Word('дислоцируйтесь', 6),
  imperfect: [],
};

perfectVerbs.set(дислоцироваться.name.text, дислоцироваться);

export { дислоцироваться };