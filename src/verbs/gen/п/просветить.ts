import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const просветить: PerfectVerb = {
  name: Word('просветить', 7),
  singular1stPerson: Word('просвечу', 7),
  singular2ndPerson: Word('просветишь', 5),
  singular3rdPerson: Word('просветит', 5),
  plural1stPerson: Word('просветим', 5),
  plural2ndPerson: Word('просветите', 5),
  plural3rdPerson: Word('просветят', 5),
  masculinePast: Word('просветил', 7),
  femininePast: Word('просветила', 7),
  neuterPast: Word('просветило', 7),
  pluralPast: Word('просветили', 7),
  imperativeInformal: Word('просвети', 7),
  imperativeFormal: Word('просветите', 7),
  imperfect: ['просвечивать'],
};

perfectVerbs.set(просветить.name.text, просветить);

export { просветить };