import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскалываться: PerfectVerb = {
  name: Word('раскалываться', 4),
  singular1stPerson: Word('раскалываюсь', 4),
  singular2ndPerson: Word('раскалываешься', 4),
  singular3rdPerson: Word('раскалывается', 4),
  plural1stPerson: Word('раскалываемся', 4),
  plural2ndPerson: Word('раскалываетесь', 4),
  plural3rdPerson: Word('раскалываются', 4),
  masculinePast: Word('раскалывался', 4),
  femininePast: Word('раскалывалась', 4),
  neuterPast: Word('раскалывалось', 4),
  pluralPast: Word('раскалывались', 4),
  imperativeInformal: Word('раскалывайся', 4),
  imperativeFormal: Word('раскалывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскалываться.name.text, раскалываться);

export { раскалываться };