import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const попудрить: PerfectVerb = {
  name: Word('попудрить', 3),
  singular1stPerson: Word('попудрю', 3),
  singular2ndPerson: Word('попудришь', 3),
  singular3rdPerson: Word('попудрит', 3),
  plural1stPerson: Word('попудрим', 3),
  plural2ndPerson: Word('попудрите', 3),
  plural3rdPerson: Word('попудрят', 3),
  masculinePast: Word('попудрил', 3),
  femininePast: Word('попудрила', 3),
  neuterPast: Word('попудрило', 3),
  pluralPast: Word('попудрили', 3),
  imperativeInformal: Word('попудри', 3),
  imperativeFormal: Word('попудрите', 3),
  imperfect: [],
};

perfectVerbs.set(попудрить.name.text, попудрить);

export { попудрить };