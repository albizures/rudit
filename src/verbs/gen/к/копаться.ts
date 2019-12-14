import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const копаться: PerfectVerb = {
  name: Word('копаться', 3),
  singular1stPerson: Word('копаюсь', 3),
  singular2ndPerson: Word('копаешься', 3),
  singular3rdPerson: Word('копается', 3),
  plural1stPerson: Word('копаемся', 3),
  plural2ndPerson: Word('копаетесь', 3),
  plural3rdPerson: Word('копаются', 3),
  masculinePast: Word('копался', 3),
  femininePast: Word('копалась', 3),
  neuterPast: Word('копалось', 3),
  pluralPast: Word('копались', 3),
  imperativeInformal: Word('копайся', 3),
  imperativeFormal: Word('копайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(копаться.name.text, копаться);

export { копаться };