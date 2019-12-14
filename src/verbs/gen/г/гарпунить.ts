import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const гарпунить: PerfectVerb = {
  name: Word('гарпунить', 4),
  singular1stPerson: Word('гарпуню', 4),
  singular2ndPerson: Word('гарпунишь', 4),
  singular3rdPerson: Word('гарпунит', 4),
  plural1stPerson: Word('гарпуним', 4),
  plural2ndPerson: Word('гарпуните', 4),
  plural3rdPerson: Word('гарпунят', 4),
  masculinePast: Word('гарпунил', 4),
  femininePast: Word('гарпунила', 4),
  neuterPast: Word('гарпунило', 4),
  pluralPast: Word('гарпунили', 4),
  imperativeInformal: Word('гарпунь', 4),
  imperativeFormal: Word('гарпуньте', 4),
  imperfect: [],
};

perfectVerbs.set(гарпунить.name.text, гарпунить);

export { гарпунить };