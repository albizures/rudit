import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усадить: PerfectVerb = {
  name: Word('усадить', 4),
  singular1stPerson: Word('усажу', 4),
  singular2ndPerson: Word('усадишь', 2),
  singular3rdPerson: Word('усадит', 2),
  plural1stPerson: Word('усадим', 2),
  plural2ndPerson: Word('усадите', 2),
  plural3rdPerson: Word('усадят', 2),
  masculinePast: Word('усадил', 4),
  femininePast: Word('усадила', 4),
  neuterPast: Word('усадило', 4),
  pluralPast: Word('усадили', 4),
  imperativeInformal: Word('усади', 4),
  imperativeFormal: Word('усадите', 4),
  imperfect: [],
};

perfectVerbs.set(усадить.name.text, усадить);

export { усадить };