import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const стибрить: PerfectVerb = {
  name: Word('стибрить', 2),
  singular1stPerson: Word('стибрю', 2),
  singular2ndPerson: Word('стибришь', 2),
  singular3rdPerson: Word('стибрит', 2),
  plural1stPerson: Word('стибрим', 2),
  plural2ndPerson: Word('стибрите', 2),
  plural3rdPerson: Word('стибрят', 2),
  masculinePast: Word('стибрил', 2),
  femininePast: Word('стибрила', 2),
  neuterPast: Word('стибрило', 2),
  pluralPast: Word('стибрили', 2),
  imperativeInformal: Word('стибри', 2),
  imperativeFormal: Word('стибрите', 2),
  imperfect: [],
};

perfectVerbs.set(стибрить.name.text, стибрить);

export { стибрить };