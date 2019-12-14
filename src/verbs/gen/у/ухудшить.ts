import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ухудшить: PerfectVerb = {
  name: Word('ухудшить', 2),
  singular1stPerson: Word('ухудшу', 2),
  singular2ndPerson: Word('ухудшишь', 2),
  singular3rdPerson: Word('ухудшит', 2),
  plural1stPerson: Word('ухудшим', 2),
  plural2ndPerson: Word('ухудшите', 2),
  plural3rdPerson: Word('ухудшат', 2),
  masculinePast: Word('ухудшил', 2),
  femininePast: Word('ухудшила', 2),
  neuterPast: Word('ухудшило', 2),
  pluralPast: Word('ухудшили', 2),
  imperativeInformal: Word('ухудши', 2),
  imperativeFormal: Word('ухудшите', 2),
  imperfect: [],
};

perfectVerbs.set(ухудшить.name.text, ухудшить);

export { ухудшить };