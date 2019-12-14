import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const съезжаться: PerfectVerb = {
  name: Word('съезжаться', 5),
  singular1stPerson: Word('съезжаюсь', 5),
  singular2ndPerson: Word('съезжаешься', 5),
  singular3rdPerson: Word('съезжается', 5),
  plural1stPerson: Word('съезжаемся', 5),
  plural2ndPerson: Word('съезжаетесь', 5),
  plural3rdPerson: Word('съезжаются', 5),
  masculinePast: Word('съезжался', 5),
  femininePast: Word('съезжалась', 5),
  neuterPast: Word('съезжалось', 5),
  pluralPast: Word('съезжались', 5),
  imperativeInformal: Word('съезжайся', 5),
  imperativeFormal: Word('съезжайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(съезжаться.name.text, съезжаться);

export { съезжаться };