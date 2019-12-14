import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскидываться: PerfectVerb = {
  name: Word('раскидываться', 4),
  singular1stPerson: Word('раскидываюсь', 4),
  singular2ndPerson: Word('раскидываешься', 4),
  singular3rdPerson: Word('раскидывается', 4),
  plural1stPerson: Word('раскидываемся', 4),
  plural2ndPerson: Word('раскидываетесь', 4),
  plural3rdPerson: Word('раскидываются', 4),
  masculinePast: Word('раскидывался', 4),
  femininePast: Word('раскидывалась', 4),
  neuterPast: Word('раскидывалось', 4),
  pluralPast: Word('раскидывались', 4),
  imperativeInformal: Word('раскидывайся', 4),
  imperativeFormal: Word('раскидывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскидываться.name.text, раскидываться);

export { раскидываться };