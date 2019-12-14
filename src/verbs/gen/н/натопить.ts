import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const натопить: PerfectVerb = {
  name: Word('натопить', 5),
  singular1stPerson: Word('натоплю', 6),
  singular2ndPerson: Word('натопишь', 3),
  singular3rdPerson: Word('натопит', 3),
  plural1stPerson: Word('натопим', 3),
  plural2ndPerson: Word('натопите', 3),
  plural3rdPerson: Word('натопят', 3),
  masculinePast: Word('натопил', 5),
  femininePast: Word('натопила', 5),
  neuterPast: Word('натопило', 5),
  pluralPast: Word('натопили', 5),
  imperativeInformal: Word('натопи', 5),
  imperativeFormal: Word('натопите', 5),
  imperfect: [],
};

perfectVerbs.set(натопить.name.text, натопить);

export { натопить };