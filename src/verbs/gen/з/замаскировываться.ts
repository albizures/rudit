import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замаскировываться: PerfectVerb = {
  name: Word('замаскировываться', 8),
  singular1stPerson: Word('замаскировываюсь', 8),
  singular2ndPerson: Word('замаскировываешься', 8),
  singular3rdPerson: Word('замаскировывается', 8),
  plural1stPerson: Word('замаскировываемся', 8),
  plural2ndPerson: Word('замаскировываетесь', 8),
  plural3rdPerson: Word('замаскировываются', 8),
  masculinePast: Word('замаскировывался', 8),
  femininePast: Word('замаскировывалась', 8),
  neuterPast: Word('замаскировывалось', 8),
  pluralPast: Word('замаскировывались', 8),
  imperativeInformal: Word('замаскировывайся', 8),
  imperativeFormal: Word('замаскировывайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(замаскировываться.name.text, замаскировываться);

export { замаскировываться };