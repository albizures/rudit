import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const искажаться: PerfectVerb = {
  name: Word('искажаться', 5),
  singular1stPerson: Word('искажаюсь', 5),
  singular2ndPerson: Word('искажаешься', 5),
  singular3rdPerson: Word('искажается', 5),
  plural1stPerson: Word('искажаемся', 5),
  plural2ndPerson: Word('искажаетесь', 5),
  plural3rdPerson: Word('искажаются', 5),
  masculinePast: Word('искажался', 5),
  femininePast: Word('искажалась', 5),
  neuterPast: Word('искажалось', 5),
  pluralPast: Word('искажались', 5),
  imperativeInformal: Word('искажайся', 5),
  imperativeFormal: Word('искажайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(искажаться.name.text, искажаться);

export { искажаться };