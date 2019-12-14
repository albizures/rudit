import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оступаться: PerfectVerb = {
  name: Word('оступаться', 5),
  singular1stPerson: Word('оступаюсь', 5),
  singular2ndPerson: Word('оступаешься', 5),
  singular3rdPerson: Word('оступается', 5),
  plural1stPerson: Word('оступаемся', 5),
  plural2ndPerson: Word('оступаетесь', 5),
  plural3rdPerson: Word('оступаются', 5),
  masculinePast: Word('оступался', 5),
  femininePast: Word('оступалась', 5),
  neuterPast: Word('оступалось', 5),
  pluralPast: Word('оступались', 5),
  imperativeInformal: Word('оступайся', 5),
  imperativeFormal: Word('оступайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(оступаться.name.text, оступаться);

export { оступаться };