import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наскучить: PerfectVerb = {
  name: Word('наскучить', 4),
  singular1stPerson: Word('наскучу', 4),
  singular2ndPerson: Word('наскучишь', 4),
  singular3rdPerson: Word('наскучит', 4),
  plural1stPerson: Word('наскучим', 4),
  plural2ndPerson: Word('наскучите', 4),
  plural3rdPerson: Word('наскучат', 4),
  masculinePast: Word('наскучил', 4),
  femininePast: Word('наскучила', 4),
  neuterPast: Word('наскучило', 4),
  pluralPast: Word('наскучили', 4),
  imperativeInformal: Word('наскучь', 4),
  imperativeFormal: Word('наскучьте', 4),
  imperfect: [],
};

perfectVerbs.set(наскучить.name.text, наскучить);

export { наскучить };