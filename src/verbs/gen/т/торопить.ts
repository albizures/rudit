import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const торопить: PerfectVerb = {
  name: Word('торопить', 5),
  singular1stPerson: Word('тороплю', 6),
  singular2ndPerson: Word('торопишь', 3),
  singular3rdPerson: Word('торопит', 3),
  plural1stPerson: Word('торопим', 3),
  plural2ndPerson: Word('торопите', 3),
  plural3rdPerson: Word('торопят', 3),
  masculinePast: Word('торопил', 5),
  femininePast: Word('торопила', 5),
  neuterPast: Word('торопило', 5),
  pluralPast: Word('торопили', 5),
  imperativeInformal: Word('торопи', 5),
  imperativeFormal: Word('торопите', 5),
  imperfect: [],
};

perfectVerbs.set(торопить.name.text, торопить);

export { торопить };