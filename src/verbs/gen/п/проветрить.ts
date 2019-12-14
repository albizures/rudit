import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проветрить: PerfectVerb = {
  name: Word('проветрить', 4),
  singular1stPerson: Word('проветрю', 4),
  singular2ndPerson: Word('проветришь', 4),
  singular3rdPerson: Word('проветрит', 4),
  plural1stPerson: Word('проветрим', 4),
  plural2ndPerson: Word('проветрите', 4),
  plural3rdPerson: Word('проветрят', 4),
  masculinePast: Word('проветрил', 4),
  femininePast: Word('проветрила', 4),
  neuterPast: Word('проветрило', 4),
  pluralPast: Word('проветрили', 4),
  imperativeInformal: Word('проветри', 4),
  imperativeFormal: Word('проветрите', 4),
  imperfect: ['проветривать'],
};

perfectVerbs.set(проветрить.name.text, проветрить);

export { проветрить };