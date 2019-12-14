import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскошеливаться: PerfectVerb = {
  name: Word('раскошеливаться', 6),
  singular1stPerson: Word('раскошеливаюсь', 6),
  singular2ndPerson: Word('раскошеливаешься', 6),
  singular3rdPerson: Word('раскошеливается', 6),
  plural1stPerson: Word('раскошеливаемся', 6),
  plural2ndPerson: Word('раскошеливаетесь', 6),
  plural3rdPerson: Word('раскошеливаются', 6),
  masculinePast: Word('раскошеливался', 6),
  femininePast: Word('раскошеливалась', 6),
  neuterPast: Word('раскошеливалось', 6),
  pluralPast: Word('раскошеливались', 6),
  imperativeInformal: Word('раскошеливайся', 6),
  imperativeFormal: Word('раскошеливайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(раскошеливаться.name.text, раскошеливаться);

export { раскошеливаться };