import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угостить: PerfectVerb = {
  name: Word('угостить', 5),
  singular1stPerson: Word('угощу', 4),
  singular2ndPerson: Word('угостишь', 5),
  singular3rdPerson: Word('угостит', 5),
  plural1stPerson: Word('угостим', 5),
  plural2ndPerson: Word('угостите', 5),
  plural3rdPerson: Word('угостят', 5),
  masculinePast: Word('угостил', 5),
  femininePast: Word('угостила', 5),
  neuterPast: Word('угостило', 5),
  pluralPast: Word('угостили', 5),
  imperativeInformal: Word('угости', 5),
  imperativeFormal: Word('угостите', 5),
  imperfect: [],
};

perfectVerbs.set(угостить.name.text, угостить);

export { угостить };