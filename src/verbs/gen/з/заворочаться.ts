import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заворочаться: PerfectVerb = {
  name: Word('заворочаться', 5),
  singular1stPerson: Word('заворочаюсь', 5),
  singular2ndPerson: Word('заворочаешься', 5),
  singular3rdPerson: Word('заворочается', 5),
  plural1stPerson: Word('заворочаемся', 5),
  plural2ndPerson: Word('заворочаетесь', 5),
  plural3rdPerson: Word('заворочаются', 5),
  masculinePast: Word('заворочался', 5),
  femininePast: Word('заворочалась', 5),
  neuterPast: Word('заворочалось', 5),
  pluralPast: Word('заворочались', 5),
  imperativeInformal: Word('заворочайся', 5),
  imperativeFormal: Word('заворочайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(заворочаться.name.text, заворочаться);

export { заворочаться };