import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оголиться: PerfectVerb = {
  name: Word('оголиться', 4),
  singular1stPerson: Word('оголюсь', 4),
  singular2ndPerson: Word('оголишься', 4),
  singular3rdPerson: Word('оголится', 4),
  plural1stPerson: Word('оголимся', 4),
  plural2ndPerson: Word('оголитесь', 4),
  plural3rdPerson: Word('оголятся', 4),
  masculinePast: Word('оголился', 4),
  femininePast: Word('оголилась', 4),
  neuterPast: Word('оголилось', 4),
  pluralPast: Word('оголились', 4),
  imperativeInformal: Word('оголись', 4),
  imperativeFormal: Word('оголитесь', 4),
  imperfect: [],
};

perfectVerbs.set(оголиться.name.text, оголиться);

export { оголиться };