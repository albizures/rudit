import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засветить: PerfectVerb = {
  name: Word('засветить', 6),
  singular1stPerson: Word('засвечу', 6),
  singular2ndPerson: Word('засветишь', 4),
  singular3rdPerson: Word('засветит', 4),
  plural1stPerson: Word('засветим', 4),
  plural2ndPerson: Word('засветите', 4),
  plural3rdPerson: Word('засветят', 4),
  masculinePast: Word('засветил', 6),
  femininePast: Word('засветила', 6),
  neuterPast: Word('засветило', 6),
  pluralPast: Word('засветили', 6),
  imperativeInformal: Word('засвети', 6),
  imperativeFormal: Word('засветите', 6),
  imperfect: [],
};

perfectVerbs.set(засветить.name.text, засветить);

export { засветить };