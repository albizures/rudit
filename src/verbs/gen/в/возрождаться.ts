import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возрождаться: PerfectVerb = {
  name: Word('возрождаться', 7),
  singular1stPerson: Word('возрождаюсь', 7),
  singular2ndPerson: Word('возрождаешься', 7),
  singular3rdPerson: Word('возрождается', 7),
  plural1stPerson: Word('возрождаемся', 7),
  plural2ndPerson: Word('возрождаетесь', 7),
  plural3rdPerson: Word('возрождаются', 7),
  masculinePast: Word('возрождался', 7),
  femininePast: Word('возрождалась', 7),
  neuterPast: Word('возрождалось', 7),
  pluralPast: Word('возрождались', 7),
  imperativeInformal: Word('возрождайся', 7),
  imperativeFormal: Word('возрождайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(возрождаться.name.text, возрождаться);

export { возрождаться };