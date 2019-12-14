import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возмещаться: PerfectVerb = {
  name: Word('возмещаться', 6),
  singular1stPerson: Word('возмещаюсь', 6),
  singular2ndPerson: Word('возмещаешься', 6),
  singular3rdPerson: Word('возмещается', 6),
  plural1stPerson: Word('возмещаемся', 6),
  plural2ndPerson: Word('возмещаетесь', 6),
  plural3rdPerson: Word('возмещаются', 6),
  masculinePast: Word('возмещался', 6),
  femininePast: Word('возмещалась', 6),
  neuterPast: Word('возмещалось', 6),
  pluralPast: Word('возмещались', 6),
  imperativeInformal: Word('возмещайся', 6),
  imperativeFormal: Word('возмещайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(возмещаться.name.text, возмещаться);

export { возмещаться };