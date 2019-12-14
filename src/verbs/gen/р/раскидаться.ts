import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскидаться: PerfectVerb = {
  name: Word('раскидаться', 6),
  singular1stPerson: Word('раскидаюсь', 6),
  singular2ndPerson: Word('раскидаешься', 6),
  singular3rdPerson: Word('раскидается', 6),
  plural1stPerson: Word('раскидаемся', 6),
  plural2ndPerson: Word('раскидаетесь', 6),
  plural3rdPerson: Word('раскидаются', 6),
  masculinePast: Word('раскидался', 6),
  femininePast: Word('раскидалась', 6),
  neuterPast: Word('раскидалось', 6),
  pluralPast: Word('раскидались', 6),
  imperativeInformal: Word('раскидайся', 6),
  imperativeFormal: Word('раскидайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(раскидаться.name.text, раскидаться);

export { раскидаться };