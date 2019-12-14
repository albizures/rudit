import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раскупориваться: PerfectVerb = {
  name: Word('раскупориваться', 4),
  singular1stPerson: Word('раскупориваюсь', 4),
  singular2ndPerson: Word('раскупориваешься', 4),
  singular3rdPerson: Word('раскупоривается', 4),
  plural1stPerson: Word('раскупориваемся', 4),
  plural2ndPerson: Word('раскупориваетесь', 4),
  plural3rdPerson: Word('раскупориваются', 4),
  masculinePast: Word('раскупоривался', 4),
  femininePast: Word('раскупоривалась', 4),
  neuterPast: Word('раскупоривалось', 4),
  pluralPast: Word('раскупоривались', 4),
  imperativeInformal: Word('раскупоривайся', 4),
  imperativeFormal: Word('раскупоривайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(раскупориваться.name.text, раскупориваться);

export { раскупориваться };