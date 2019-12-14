import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возопить: PerfectVerb = {
  name: Word('возопить', 5),
  singular1stPerson: Word('возоплю', 6),
  singular2ndPerson: Word('возопишь', 5),
  singular3rdPerson: Word('возопит', 5),
  plural1stPerson: Word('возопим', 5),
  plural2ndPerson: Word('возопите', 5),
  plural3rdPerson: Word('возопят', 5),
  masculinePast: Word('возопил', 5),
  femininePast: Word('возопила', 5),
  neuterPast: Word('возопило', 5),
  pluralPast: Word('возопили', 5),
  imperativeInformal: Word('возопи', 5),
  imperativeFormal: Word('возопите', 5),
  imperfect: [],
};

perfectVerbs.set(возопить.name.text, возопить);

export { возопить };