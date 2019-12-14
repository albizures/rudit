import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const близиться: PerfectVerb = {
  name: Word('близиться', 2),
  singular1stPerson: Word('ближусь', 2),
  singular2ndPerson: Word('близишься', 2),
  singular3rdPerson: Word('близится', 2),
  plural1stPerson: Word('близимся', 2),
  plural2ndPerson: Word('близитесь', 2),
  plural3rdPerson: Word('близятся', 2),
  masculinePast: Word('близился', 2),
  femininePast: Word('близилась', 2),
  neuterPast: Word('близилось', 2),
  pluralPast: Word('близились', 2),
  imperativeInformal: Word('близься', 2),
  imperativeFormal: Word('близьтесь', 2),
  imperfect: [],
};

perfectVerbs.set(близиться.name.text, близиться);

export { близиться };