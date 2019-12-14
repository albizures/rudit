import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истопить: PerfectVerb = {
  name: Word('истопить', 5),
  singular1stPerson: Word('истоплю', 6),
  singular2ndPerson: Word('истопишь', 3),
  singular3rdPerson: Word('истопит', 3),
  plural1stPerson: Word('истопим', 3),
  plural2ndPerson: Word('истопите', 3),
  plural3rdPerson: Word('истопят', 3),
  masculinePast: Word('истопил', 5),
  femininePast: Word('истопила', 5),
  neuterPast: Word('истопило', 5),
  pluralPast: Word('истопили', 5),
  imperativeInformal: Word('истопи', 5),
  imperativeFormal: Word('истопите', 5),
  imperfect: [],
};

perfectVerbs.set(истопить.name.text, истопить);

export { истопить };