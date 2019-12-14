import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свесить: PerfectVerb = {
  name: Word('свесить', 2),
  singular1stPerson: Word('свешу', 2),
  singular2ndPerson: Word('свесишь', 2),
  singular3rdPerson: Word('свесит', 2),
  plural1stPerson: Word('свесим', 2),
  plural2ndPerson: Word('свесите', 2),
  plural3rdPerson: Word('свесят', 2),
  masculinePast: Word('свесил', 2),
  femininePast: Word('свесила', 2),
  neuterPast: Word('свесило', 2),
  pluralPast: Word('свесили', 2),
  imperativeInformal: Word('свесь', 2),
  imperativeFormal: Word('свесьте', 2),
  imperfect: [],
};

perfectVerbs.set(свесить.name.text, свесить);

export { свесить };