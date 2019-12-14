import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возвышаться: PerfectVerb = {
  name: Word('возвышаться', 6),
  singular1stPerson: Word('возвышаюсь', 6),
  singular2ndPerson: Word('возвышаешься', 6),
  singular3rdPerson: Word('возвышается', 6),
  plural1stPerson: Word('возвышаемся', 6),
  plural2ndPerson: Word('возвышаетесь', 6),
  plural3rdPerson: Word('возвышаются', 6),
  masculinePast: Word('возвышался', 6),
  femininePast: Word('возвышалась', 6),
  neuterPast: Word('возвышалось', 6),
  pluralPast: Word('возвышались', 6),
  imperativeInformal: Word('возвышайся', 6),
  imperativeFormal: Word('возвышайтесь', 6),
  imperfect: ['возвыситься'],
};

perfectVerbs.set(возвышаться.name.text, возвышаться);

export { возвышаться };