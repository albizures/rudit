import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const противоречить: PerfectVerb = {
  name: Word('противоречить', 8),
  singular1stPerson: Word('противоречу', 8),
  singular2ndPerson: Word('противоречишь', 8),
  singular3rdPerson: Word('противоречит', 8),
  plural1stPerson: Word('противоречим', 8),
  plural2ndPerson: Word('противоречите', 8),
  plural3rdPerson: Word('противоречат', 8),
  masculinePast: Word('противоречил', 8),
  femininePast: Word('противоречила', 8),
  neuterPast: Word('противоречило', 8),
  pluralPast: Word('противоречили', 8),
  imperativeInformal: Word('противоречь', 8),
  imperativeFormal: Word('противоречьте', 8),
  imperfect: [],
};

perfectVerbs.set(противоречить.name.text, противоречить);

export { противоречить };