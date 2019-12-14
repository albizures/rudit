import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сбросить: PerfectVerb = {
  name: Word('сбросить', 3),
  singular1stPerson: Word('сброшу', 3),
  singular2ndPerson: Word('сбросишь', 3),
  singular3rdPerson: Word('сбросит', 3),
  plural1stPerson: Word('сбросим', 3),
  plural2ndPerson: Word('сбросите', 3),
  plural3rdPerson: Word('сбросят', 3),
  masculinePast: Word('сбросил', 3),
  femininePast: Word('сбросила', 3),
  neuterPast: Word('сбросило', 3),
  pluralPast: Word('сбросили', 3),
  imperativeInformal: Word('сбрось', 3),
  imperativeFormal: Word('сбросьте', 3),
  imperfect: ['сбрасывать'],
};

perfectVerbs.set(сбросить.name.text, сбросить);

export { сбросить };