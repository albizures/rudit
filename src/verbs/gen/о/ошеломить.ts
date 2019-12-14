import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ошеломить: PerfectVerb = {
  name: Word('ошеломить', 6),
  singular1stPerson: Word('ошеломлю', 7),
  singular2ndPerson: Word('ошеломишь', 6),
  singular3rdPerson: Word('ошеломит', 6),
  plural1stPerson: Word('ошеломим', 6),
  plural2ndPerson: Word('ошеломите', 6),
  plural3rdPerson: Word('ошеломят', 6),
  masculinePast: Word('ошеломил', 6),
  femininePast: Word('ошеломила', 6),
  neuterPast: Word('ошеломило', 6),
  pluralPast: Word('ошеломили', 6),
  imperativeInformal: Word('ошеломи', 6),
  imperativeFormal: Word('ошеломите', 6),
  imperfect: [],
};

perfectVerbs.set(ошеломить.name.text, ошеломить);

export { ошеломить };