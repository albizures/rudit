import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const процедить: PerfectVerb = {
  name: Word('процедить', 6),
  singular1stPerson: Word('процежу', 6),
  singular2ndPerson: Word('процедишь', 4),
  singular3rdPerson: Word('процедит', 4),
  plural1stPerson: Word('процедим', 4),
  plural2ndPerson: Word('процедите', 4),
  plural3rdPerson: Word('процедят', 4),
  masculinePast: Word('процедил', 6),
  femininePast: Word('процедила', 6),
  neuterPast: Word('процедило', 6),
  pluralPast: Word('процедили', 6),
  imperativeInformal: Word('процеди', 6),
  imperativeFormal: Word('процедите', 6),
  imperfect: [],
};

perfectVerbs.set(процедить.name.text, процедить);

export { процедить };