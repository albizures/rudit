import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ворочаться: PerfectVerb = {
  name: Word('ворочаться', 3),
  singular1stPerson: Word('ворочаюсь', 3),
  singular2ndPerson: Word('ворочаешься', 3),
  singular3rdPerson: Word('ворочается', 3),
  plural1stPerson: Word('ворочаемся', 3),
  plural2ndPerson: Word('ворочаетесь', 3),
  plural3rdPerson: Word('ворочаются', 3),
  masculinePast: Word('ворочался', 3),
  femininePast: Word('ворочалась', 3),
  neuterPast: Word('ворочалось', 3),
  pluralPast: Word('ворочались', 3),
  imperativeInformal: Word('ворочайся', 3),
  imperativeFormal: Word('ворочайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(ворочаться.name.text, ворочаться);

export { ворочаться };