import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расступаться: PerfectVerb = {
  name: Word('расступаться', 7),
  singular1stPerson: Word('расступаюсь', 7),
  singular2ndPerson: Word('расступаешься', 7),
  singular3rdPerson: Word('расступается', 7),
  plural1stPerson: Word('расступаемся', 7),
  plural2ndPerson: Word('расступаетесь', 7),
  plural3rdPerson: Word('расступаются', 7),
  masculinePast: Word('расступался', 7),
  femininePast: Word('расступалась', 7),
  neuterPast: Word('расступалось', 7),
  pluralPast: Word('расступались', 7),
  imperativeInformal: Word('расступайся', 7),
  imperativeFormal: Word('расступайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(расступаться.name.text, расступаться);

export { расступаться };