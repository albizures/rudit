import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const значить: PerfectVerb = {
  name: Word('значить', 2),
  singular1stPerson: Word('значу', 2),
  singular2ndPerson: Word('значишь', 2),
  singular3rdPerson: Word('значит', 2),
  plural1stPerson: Word('значим', 2),
  plural2ndPerson: Word('значите', 2),
  plural3rdPerson: Word('значат', 2),
  masculinePast: Word('значил', 2),
  femininePast: Word('значила', 2),
  neuterPast: Word('значило', 2),
  pluralPast: Word('значили', 2),
  imperativeInformal: Word('значь', 2),
  imperativeFormal: Word('значьте', 2),
  imperfect: [],
};

perfectVerbs.set(значить.name.text, значить);

export { значить };