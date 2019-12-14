import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отключить: PerfectVerb = {
  name: Word('отключить', 6),
  singular1stPerson: Word('отключу', 6),
  singular2ndPerson: Word('отключишь', 6),
  singular3rdPerson: Word('отключит', 6),
  plural1stPerson: Word('отключим', 6),
  plural2ndPerson: Word('отключите', 6),
  plural3rdPerson: Word('отключат', 6),
  masculinePast: Word('отключил', 6),
  femininePast: Word('отключила', 6),
  neuterPast: Word('отключило', 6),
  pluralPast: Word('отключили', 6),
  imperativeInformal: Word('отключи', 6),
  imperativeFormal: Word('отключите', 6),
  imperfect: [],
};

perfectVerbs.set(отключить.name.text, отключить);

export { отключить };