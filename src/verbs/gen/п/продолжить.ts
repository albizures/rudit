import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продолжить: PerfectVerb = {
  name: Word('продолжить', 4),
  singular1stPerson: Word('продолжу', 4),
  singular2ndPerson: Word('продолжишь', 4),
  singular3rdPerson: Word('продолжит', 4),
  plural1stPerson: Word('продолжим', 4),
  plural2ndPerson: Word('продолжите', 4),
  plural3rdPerson: Word('продолжат', 4),
  masculinePast: Word('продолжил', 4),
  femininePast: Word('продолжила', 4),
  neuterPast: Word('продолжило', 4),
  pluralPast: Word('продолжили', 4),
  imperativeInformal: Word('продолжи', 4),
  imperativeFormal: Word('продолжите', 4),
  imperfect: ['продолжать'],
};

perfectVerbs.set(продолжить.name.text, продолжить);

export { продолжить };