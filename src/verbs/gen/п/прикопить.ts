import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикопить: PerfectVerb = {
  name: Word('прикопить', 6),
  singular1stPerson: Word('прикоплю', 7),
  singular2ndPerson: Word('прикопишь', 4),
  singular3rdPerson: Word('прикопит', 4),
  plural1stPerson: Word('прикопим', 4),
  plural2ndPerson: Word('прикопите', 4),
  plural3rdPerson: Word('прикопят', 4),
  masculinePast: Word('прикопил', 6),
  femininePast: Word('прикопила', 6),
  neuterPast: Word('прикопило', 6),
  pluralPast: Word('прикопили', 6),
  imperativeInformal: Word('прикопи', 6),
  imperativeFormal: Word('прикопите', 6),
  imperfect: [],
};

perfectVerbs.set(прикопить.name.text, прикопить);

export { прикопить };