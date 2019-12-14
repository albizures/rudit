import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выбранить: PerfectVerb = {
  name: Word('выбранить', 1),
  singular1stPerson: Word('выбраню', 1),
  singular2ndPerson: Word('выбранишь', 1),
  singular3rdPerson: Word('выбранит', 1),
  plural1stPerson: Word('выбраним', 1),
  plural2ndPerson: Word('выбраните', 1),
  plural3rdPerson: Word('выбранят', 1),
  masculinePast: Word('выбранил', 1),
  femininePast: Word('выбранила', 1),
  neuterPast: Word('выбранило', 1),
  pluralPast: Word('выбранили', 1),
  imperativeInformal: Word('выбрани', 1),
  imperativeFormal: Word('выбраните', 1),
  imperfect: [],
};

perfectVerbs.set(выбранить.name.text, выбранить);

export { выбранить };