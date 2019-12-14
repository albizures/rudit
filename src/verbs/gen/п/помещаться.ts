import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помещаться: PerfectVerb = {
  name: Word('помещаться', 5),
  singular1stPerson: Word('помещаюсь', 5),
  singular2ndPerson: Word('помещаешься', 5),
  singular3rdPerson: Word('помещается', 5),
  plural1stPerson: Word('помещаемся', 5),
  plural2ndPerson: Word('помещаетесь', 5),
  plural3rdPerson: Word('помещаются', 5),
  masculinePast: Word('помещался', 5),
  femininePast: Word('помещалась', 5),
  neuterPast: Word('помещалось', 5),
  pluralPast: Word('помещались', 5),
  imperativeInformal: Word('помещайся', 5),
  imperativeFormal: Word('помещайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(помещаться.name.text, помещаться);

export { помещаться };