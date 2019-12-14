import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отметить: PerfectVerb = {
  name: Word('отметить', 3),
  singular1stPerson: Word('отмечу', 3),
  singular2ndPerson: Word('отметишь', 3),
  singular3rdPerson: Word('отметит', 3),
  plural1stPerson: Word('отметим', 3),
  plural2ndPerson: Word('отметите', 3),
  plural3rdPerson: Word('отметят', 3),
  masculinePast: Word('отметил', 3),
  femininePast: Word('отметила', 3),
  neuterPast: Word('отметило', 3),
  pluralPast: Word('отметили', 3),
  imperativeInformal: Word('отметь', 3),
  imperativeFormal: Word('отметьте', 3),
  imperfect: ['отмечать'],
};

perfectVerbs.set(отметить.name.text, отметить);

export { отметить };