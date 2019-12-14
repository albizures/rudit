import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поворотиться: PerfectVerb = {
  name: Word('поворотиться', 7),
  singular1stPerson: Word('поворочусь', 7),
  singular2ndPerson: Word('поворотишься', 5),
  singular3rdPerson: Word('поворотится', 5),
  plural1stPerson: Word('поворотимся', 5),
  plural2ndPerson: Word('поворотитесь', 5),
  plural3rdPerson: Word('поворотятся', 5),
  masculinePast: Word('поворотился', 7),
  femininePast: Word('поворотилась', 7),
  neuterPast: Word('поворотилось', 7),
  pluralPast: Word('поворотились', 7),
  imperativeInformal: Word('поворотись', 7),
  imperativeFormal: Word('поворотитесь', 7),
  imperfect: [],
};

perfectVerbs.set(поворотиться.name.text, поворотиться);

export { поворотиться };