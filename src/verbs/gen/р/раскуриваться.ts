import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскуриваться: PerfectVerb = {
  name: Word('раскуриваться', 4),
  singular1stPerson: Word('раскуриваюсь', 4),
  singular2ndPerson: Word('раскуриваешься', 4),
  singular3rdPerson: Word('раскуривается', 4),
  plural1stPerson: Word('раскуриваемся', 4),
  plural2ndPerson: Word('раскуриваетесь', 4),
  plural3rdPerson: Word('раскуриваются', 4),
  masculinePast: Word('раскуривался', 4),
  femininePast: Word('раскуривалась', 4),
  neuterPast: Word('раскуривалось', 4),
  pluralPast: Word('раскуривались', 4),
  imperativeInformal: Word('раскуривайся', 4),
  imperativeFormal: Word('раскуривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскуриваться.name.text, раскуриваться);

export { раскуриваться };