import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возгораться: PerfectVerb = {
  name: Word('возгораться', 6),
  singular1stPerson: Word('возгораюсь', 6),
  singular2ndPerson: Word('возгораешься', 6),
  singular3rdPerson: Word('возгорается', 6),
  plural1stPerson: Word('возгораемся', 6),
  plural2ndPerson: Word('возгораетесь', 6),
  plural3rdPerson: Word('возгораются', 6),
  masculinePast: Word('возгорался', 6),
  femininePast: Word('возгоралась', 6),
  neuterPast: Word('возгоралось', 6),
  pluralPast: Word('возгорались', 6),
  imperativeInformal: Word('возгорайся', 6),
  imperativeFormal: Word('возгорайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(возгораться.name.text, возгораться);

export { возгораться };