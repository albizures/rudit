import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const делить: PerfectVerb = {
  name: Word('делить', 3),
  singular1stPerson: Word('делю', 3),
  singular2ndPerson: Word('делишь', 1),
  singular3rdPerson: Word('делит', 1),
  plural1stPerson: Word('делим', 1),
  plural2ndPerson: Word('делите', 1),
  plural3rdPerson: Word('делят', 1),
  masculinePast: Word('делил', 3),
  femininePast: Word('делила', 3),
  neuterPast: Word('делило', 3),
  pluralPast: Word('делили', 3),
  imperativeInformal: Word('дели', 3),
  imperativeFormal: Word('делите', 3),
  imperfect: [],
};

perfectVerbs.set(делить.name.text, делить);

export { делить };