import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсветить: PerfectVerb = {
  name: Word('подсветить', 7),
  singular1stPerson: Word('подсвечу', 7),
  singular2ndPerson: Word('подсветишь', 5),
  singular3rdPerson: Word('подсветит', 5),
  plural1stPerson: Word('подсветим', 5),
  plural2ndPerson: Word('подсветите', 5),
  plural3rdPerson: Word('подсветят', 5),
  masculinePast: Word('подсветил', 7),
  femininePast: Word('подсветила', 7),
  neuterPast: Word('подсветило', 7),
  pluralPast: Word('подсветили', 7),
  imperativeInformal: Word('подсвети', 7),
  imperativeFormal: Word('подсветите', 7),
  imperfect: [],
};

perfectVerbs.set(подсветить.name.text, подсветить);

export { подсветить };