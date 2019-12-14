import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просвещаться: PerfectVerb = {
  name: Word('просвещаться', 7),
  singular1stPerson: Word('просвещаюсь', 7),
  singular2ndPerson: Word('просвещаешься', 7),
  singular3rdPerson: Word('просвещается', 7),
  plural1stPerson: Word('просвещаемся', 7),
  plural2ndPerson: Word('просвещаетесь', 7),
  plural3rdPerson: Word('просвещаются', 7),
  masculinePast: Word('просвещался', 7),
  femininePast: Word('просвещалась', 7),
  neuterPast: Word('просвещалось', 7),
  pluralPast: Word('просвещались', 7),
  imperativeInformal: Word('просвещайся', 7),
  imperativeFormal: Word('просвещайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(просвещаться.name.text, просвещаться);

export { просвещаться };