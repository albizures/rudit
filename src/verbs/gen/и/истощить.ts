import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const истощить: PerfectVerb = {
  name: Word('истощить', 5),
  singular1stPerson: Word('истощу', 5),
  singular2ndPerson: Word('истощишь', 5),
  singular3rdPerson: Word('истощит', 5),
  plural1stPerson: Word('истощим', 5),
  plural2ndPerson: Word('истощите', 5),
  plural3rdPerson: Word('истощат', 5),
  masculinePast: Word('истощил', 5),
  femininePast: Word('истощила', 5),
  neuterPast: Word('истощило', 5),
  pluralPast: Word('истощили', 5),
  imperativeInformal: Word('истощи', 5),
  imperativeFormal: Word('истощите', 5),
  imperfect: [],
};

perfectVerbs.set(истощить.name.text, истощить);

export { истощить };