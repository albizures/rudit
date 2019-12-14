import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогневаться: PerfectVerb = {
  name: Word('прогневаться', 5),
  singular1stPerson: Word('прогневаюсь', 5),
  singular2ndPerson: Word('прогневаешься', 5),
  singular3rdPerson: Word('прогневается', 5),
  plural1stPerson: Word('прогневаемся', 5),
  plural2ndPerson: Word('прогневаетесь', 5),
  plural3rdPerson: Word('прогневаются', 5),
  masculinePast: Word('прогневался', 5),
  femininePast: Word('прогневалась', 5),
  neuterPast: Word('прогневалось', 5),
  pluralPast: Word('прогневались', 5),
  imperativeInformal: Word('прогневайся', 5),
  imperativeFormal: Word('прогневайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(прогневаться.name.text, прогневаться);

export { прогневаться };