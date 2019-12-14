import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отличить: PerfectVerb = {
  name: Word('отличить', 5),
  singular1stPerson: Word('отличу', 5),
  singular2ndPerson: Word('отличишь', 5),
  singular3rdPerson: Word('отличит', 5),
  plural1stPerson: Word('отличим', 5),
  plural2ndPerson: Word('отличите', 5),
  plural3rdPerson: Word('отличат', 5),
  masculinePast: Word('отличил', 5),
  femininePast: Word('отличила', 5),
  neuterPast: Word('отличило', 5),
  pluralPast: Word('отличили', 5),
  imperativeInformal: Word('отличи', 5),
  imperativeFormal: Word('отличите', 5),
  imperfect: ['отличать'],
};

perfectVerbs.set(отличить.name.text, отличить);

export { отличить };