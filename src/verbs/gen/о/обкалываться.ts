import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обкалываться: PerfectVerb = {
  name: Word('обкалываться', 3),
  singular1stPerson: Word('обкалываюсь', 3),
  singular2ndPerson: Word('обкалываешься', 3),
  singular3rdPerson: Word('обкалывается', 3),
  plural1stPerson: Word('обкалываемся', 3),
  plural2ndPerson: Word('обкалываетесь', 3),
  plural3rdPerson: Word('обкалываются', 3),
  masculinePast: Word('обкалывался', 3),
  femininePast: Word('обкалывалась', 3),
  neuterPast: Word('обкалывалось', 3),
  pluralPast: Word('обкалывались', 3),
  imperativeInformal: Word('обкалывайся', 3),
  imperativeFormal: Word('обкалывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обкалываться.name.text, обкалываться);

export { обкалываться };