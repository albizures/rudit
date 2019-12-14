import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перемостить: PerfectVerb = {
  name: Word('перемостить', 8),
  singular1stPerson: Word('перемощу', 7),
  singular2ndPerson: Word('перемостишь', 8),
  singular3rdPerson: Word('перемостит', 8),
  plural1stPerson: Word('перемостим', 8),
  plural2ndPerson: Word('перемостите', 8),
  plural3rdPerson: Word('перемостят', 8),
  masculinePast: Word('перемостил', 8),
  femininePast: Word('перемостила', 8),
  neuterPast: Word('перемостило', 8),
  pluralPast: Word('перемостили', 8),
  imperativeInformal: Word('перемости', 8),
  imperativeFormal: Word('перемостите', 8),
  imperfect: [],
};

perfectVerbs.set(перемостить.name.text, перемостить);

export { перемостить };