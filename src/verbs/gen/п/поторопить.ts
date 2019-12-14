import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поторопить: PerfectVerb = {
  name: Word('поторопить', 7),
  singular1stPerson: Word('потороплю', 8),
  singular2ndPerson: Word('поторопишь', 5),
  singular3rdPerson: Word('поторопит', 5),
  plural1stPerson: Word('поторопим', 5),
  plural2ndPerson: Word('поторопите', 5),
  plural3rdPerson: Word('поторопят', 5),
  masculinePast: Word('поторопил', 7),
  femininePast: Word('поторопила', 7),
  neuterPast: Word('поторопило', 7),
  pluralPast: Word('поторопили', 7),
  imperativeInformal: Word('поторопи', 7),
  imperativeFormal: Word('поторопите', 7),
  imperfect: [],
};

perfectVerbs.set(поторопить.name.text, поторопить);

export { поторопить };