import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высветить: PerfectVerb = {
  name: Word('высветить', 1),
  singular1stPerson: Word('высвечу', 1),
  singular2ndPerson: Word('высветишь', 1),
  singular3rdPerson: Word('высветит', 1),
  plural1stPerson: Word('высветим', 1),
  plural2ndPerson: Word('высветите', 1),
  plural3rdPerson: Word('высветят', 1),
  masculinePast: Word('высветил', 1),
  femininePast: Word('высветила', 1),
  neuterPast: Word('высветило', 1),
  pluralPast: Word('высветили', 1),
  imperativeInformal: Word('высвети', 1),
  imperativeFormal: Word('высветите', 1),
  imperfect: [],
};

perfectVerbs.set(высветить.name.text, высветить);

export { высветить };