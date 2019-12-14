import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кишеть: PerfectVerb = {
  name: Word('кишеть', 3),
  singular1stPerson: Word('кишу', 3),
  singular2ndPerson: Word('кишишь', 3),
  singular3rdPerson: Word('кишит', 3),
  plural1stPerson: Word('кишим', 3),
  plural2ndPerson: Word('кишите', 3),
  plural3rdPerson: Word('кишат', 3),
  masculinePast: Word('кишел', 3),
  femininePast: Word('кишела', 3),
  neuterPast: Word('кишело', 3),
  pluralPast: Word('кишели', 3),
  imperativeInformal: Word('киши', 3),
  imperativeFormal: Word('кишите', 3),
  imperfect: [],
};

perfectVerbs.set(кишеть.name.text, кишеть);

export { кишеть };