import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изматываться: PerfectVerb = {
  name: Word('изматываться', 3),
  singular1stPerson: Word('изматываюсь', 3),
  singular2ndPerson: Word('изматываешься', 3),
  singular3rdPerson: Word('изматывается', 3),
  plural1stPerson: Word('изматываемся', 3),
  plural2ndPerson: Word('изматываетесь', 3),
  plural3rdPerson: Word('изматываются', 3),
  masculinePast: Word('изматывался', 3),
  femininePast: Word('изматывалась', 3),
  neuterPast: Word('изматывалось', 3),
  pluralPast: Word('изматывались', 3),
  imperativeInformal: Word('изматывайся', 3),
  imperativeFormal: Word('изматывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(изматываться.name.text, изматываться);

export { изматываться };