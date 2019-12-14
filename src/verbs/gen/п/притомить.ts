import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const притомить: PerfectVerb = {
  name: Word('притомить', 6),
  singular1stPerson: Word('притомлю', 7),
  singular2ndPerson: Word('притомишь', 6),
  singular3rdPerson: Word('притомит', 6),
  plural1stPerson: Word('притомим', 6),
  plural2ndPerson: Word('притомите', 6),
  plural3rdPerson: Word('притомят', 6),
  masculinePast: Word('притомил', 6),
  femininePast: Word('притомила', 6),
  neuterPast: Word('притомило', 6),
  pluralPast: Word('притомили', 6),
  imperativeInformal: Word('притоми', 6),
  imperativeFormal: Word('притомите', 6),
  imperfect: [],
};

perfectVerbs.set(притомить.name.text, притомить);

export { притомить };