import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удостоверить: PerfectVerb = {
  name: Word('удостоверить', 7),
  singular1stPerson: Word('удостоверю', 7),
  singular2ndPerson: Word('удостоверишь', 7),
  singular3rdPerson: Word('удостоверит', 7),
  plural1stPerson: Word('удостоверим', 7),
  plural2ndPerson: Word('удостоверите', 7),
  plural3rdPerson: Word('удостоверят', 7),
  masculinePast: Word('удостоверил', 7),
  femininePast: Word('удостоверила', 7),
  neuterPast: Word('удостоверило', 7),
  pluralPast: Word('удостоверили', 7),
  imperativeInformal: Word('удостоверь', 7),
  imperativeFormal: Word('удостоверьте', 7),
  imperfect: [],
};

perfectVerbs.set(удостоверить.name.text, удостоверить);

export { удостоверить };