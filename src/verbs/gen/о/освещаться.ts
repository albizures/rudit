import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const освещаться: PerfectVerb = {
  name: Word('освещаться', 5),
  singular1stPerson: Word('освещаюсь', 5),
  singular2ndPerson: Word('освещаешься', 5),
  singular3rdPerson: Word('освещается', 5),
  plural1stPerson: Word('освещаемся', 5),
  plural2ndPerson: Word('освещаетесь', 5),
  plural3rdPerson: Word('освещаются', 5),
  masculinePast: Word('освещался', 5),
  femininePast: Word('освещалась', 5),
  neuterPast: Word('освещалось', 5),
  pluralPast: Word('освещались', 5),
  imperativeInformal: Word('освещайся', 5),
  imperativeFormal: Word('освещайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(освещаться.name.text, освещаться);

export { освещаться };