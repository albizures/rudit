import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воспрещаться: PerfectVerb = {
  name: Word('воспрещаться', 7),
  singular1stPerson: Word('воспрещаюсь', 7),
  singular2ndPerson: Word('воспрещаешься', 7),
  singular3rdPerson: Word('воспрещается', 7),
  plural1stPerson: Word('воспрещаемся', 7),
  plural2ndPerson: Word('воспрещаетесь', 7),
  plural3rdPerson: Word('воспрещаются', 7),
  masculinePast: Word('воспрещался', 7),
  femininePast: Word('воспрещалась', 7),
  neuterPast: Word('воспрещалось', 7),
  pluralPast: Word('воспрещались', 7),
  imperativeInformal: Word('воспрещайся', 7),
  imperativeFormal: Word('воспрещайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(воспрещаться.name.text, воспрещаться);

export { воспрещаться };