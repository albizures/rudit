import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утопить: PerfectVerb = {
  name: Word('утопить', 4),
  singular1stPerson: Word('утоплю', 5),
  singular2ndPerson: Word('утопишь', 2),
  singular3rdPerson: Word('утопит', 2),
  plural1stPerson: Word('утопим', 2),
  plural2ndPerson: Word('утопите', 2),
  plural3rdPerson: Word('утопят', 2),
  masculinePast: Word('утопил', 4),
  femininePast: Word('утопила', 4),
  neuterPast: Word('утопило', 4),
  pluralPast: Word('утопили', 4),
  imperativeInformal: Word('утопи', 4),
  imperativeFormal: Word('утопите', 4),
  imperfect: [],
};

perfectVerbs.set(утопить.name.text, утопить);

export { утопить };