import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наматываться: PerfectVerb = {
  name: Word('наматываться', 3),
  singular1stPerson: Word('наматываюсь', 3),
  singular2ndPerson: Word('наматываешься', 3),
  singular3rdPerson: Word('наматывается', 3),
  plural1stPerson: Word('наматываемся', 3),
  plural2ndPerson: Word('наматываетесь', 3),
  plural3rdPerson: Word('наматываются', 3),
  masculinePast: Word('наматывался', 3),
  femininePast: Word('наматывалась', 3),
  neuterPast: Word('наматывалось', 3),
  pluralPast: Word('наматывались', 3),
  imperativeInformal: Word('наматывайся', 3),
  imperativeFormal: Word('наматывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наматываться.name.text, наматываться);

export { наматываться };