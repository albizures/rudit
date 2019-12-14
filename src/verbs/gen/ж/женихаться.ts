import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const женихаться: PerfectVerb = {
  name: Word('женихаться', 5),
  singular1stPerson: Word('женихаюсь', 5),
  singular2ndPerson: Word('женихаешься', 5),
  singular3rdPerson: Word('женихается', 5),
  plural1stPerson: Word('женихаемся', 5),
  plural2ndPerson: Word('женихаетесь', 5),
  plural3rdPerson: Word('женихаются', 5),
  masculinePast: Word('женихался', 5),
  femininePast: Word('женихалась', 5),
  neuterPast: Word('женихалось', 5),
  pluralPast: Word('женихались', 5),
  imperativeInformal: Word('женихайся', 5),
  imperativeFormal: Word('женихайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(женихаться.name.text, женихаться);

export { женихаться };