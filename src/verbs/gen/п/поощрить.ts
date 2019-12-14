import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поощрить: PerfectVerb = {
  name: Word('поощрить', 5),
  singular1stPerson: Word('поощрю', 5),
  singular2ndPerson: Word('поощришь', 5),
  singular3rdPerson: Word('поощрит', 5),
  plural1stPerson: Word('поощрим', 5),
  plural2ndPerson: Word('поощрите', 5),
  plural3rdPerson: Word('поощрят', 5),
  masculinePast: Word('поощрил', 5),
  femininePast: Word('поощрила', 5),
  neuterPast: Word('поощрило', 5),
  pluralPast: Word('поощрили', 5),
  imperativeInformal: Word('поощри', 5),
  imperativeFormal: Word('поощрите', 5),
  imperfect: ['поощрять'],
};

perfectVerbs.set(поощрить.name.text, поощрить);

export { поощрить };