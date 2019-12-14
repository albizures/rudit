import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свариться: PerfectVerb = {
  name: Word('свариться', 4),
  singular1stPerson: Word('сварюсь', 4),
  singular2ndPerson: Word('сваришься', 2),
  singular3rdPerson: Word('сварится', 2),
  plural1stPerson: Word('сваримся', 2),
  plural2ndPerson: Word('сваритесь', 2),
  plural3rdPerson: Word('сварятся', 2),
  masculinePast: Word('сварился', 4),
  femininePast: Word('сварилась', 4),
  neuterPast: Word('сварилось', 4),
  pluralPast: Word('сварились', 4),
  imperativeInformal: Word('сварись', 4),
  imperativeFormal: Word('сваритесь', 4),
  imperfect: [],
};

perfectVerbs.set(свариться.name.text, свариться);

export { свариться };